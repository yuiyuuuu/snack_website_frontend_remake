const path = require("path");
const express = require("express");
const morgan = require("morgan");
const app = express();
module.exports = app;
require("dotenv").config();

const stripe = require("stripe")(
  "sk_test_51L9yoAIILTUpIrN8axb1z8Jx5GFkY9TR9WBS9KJpZkWqWeHNDMxUogPOmTgA2DTsRAdyDy9GHWvKUVrCZx5ym7ZR00bsAEHoq2"
);

// if I am NOT in my production environment, I want access to the secrets.js file inside of my local machine (each dev should have one) --> development, test
if (process.env.NODE_ENV !== "production") require("./secrets");

// logging middleware
app.use(morgan("dev"));

// body parsing middleware
app.use(express.json());

// auth and api routes
app.use("/auth", require("./auth"));
app.use("/api", require("./api"));

app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "..", "public/index.html"))
);

// static file-serving middleware
app.use(express.static(path.join(__dirname, "..", "public")));
app.use("/assets", express.static(path.join(__dirname, "..", "assets")));

app.post("/payment", async (req, res) => {
  const { id, items } = req.body;
  const calculatePrice = (items) => {
    let totalPrice = 0;
    items.forEach((item) => {
      const itemPrice = item.product.price * 100;
      const itemQuantity = item.quantity;
      const itemTotal = itemPrice * itemQuantity;
      totalPrice = totalPrice + itemTotal;
    });
    return totalPrice; //totalPrice of our whole cart
  };

  // Create a PaymentIntent with the order amount and currency
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: calculatePrice(items),
      currency: "USD",
      payment_method: id,
      confirm: true,
    });

    res.json({
      message: "Payment Successful",
      success: true,
    });
  } catch (error) {
    console.log("Error", error);
    res.json({
      message: "Payment failed",
      success: false,
    });
  }
});
// any remaining requests with an extension (.js, .css, etc.) send 404
app.use((req, res, next) => {
  if (path.extname(req.path).length) {
    const err = new Error("Not found");
    err.status = 404;
    next(err);
  } else {
    next();
  }
});

// sends index.html
app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public/index.html"));
});

// error handling endware
app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || "Internal server error.");
});
