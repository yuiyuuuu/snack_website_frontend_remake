//testing and reference purposes only, can delete anytime if needed
const stripe = require("stripe")(
  "sk_test_51L9yoAIILTUpIrN8axb1z8Jx5GFkY9TR9WBS9KJpZkWqWeHNDMxUogPOmTgA2DTsRAdyDy9GHWvKUVrCZx5ym7ZR00bsAEHoq2" //this key tells us which account it will go to, so if i go to stripe dash, the new produdct will be there
);

stripe.products
  .create({
    name: "Starter Subscription",
    description: "$12/Month subscription",
  })
  .then((product) => {
    stripe.prices
      .create({
        unit_amount: 1200,
        currency: "usd",
        recurring: {
          interval: "month",
        },
        product: product.id,
      })
      .then((price) => {
        console.log(
          "Success! Here is your starter subscription product id: " + product.id
        );
        console.log(
          "Success! Here is your premium subscription price id: " + price.id
        );
      });
  });
