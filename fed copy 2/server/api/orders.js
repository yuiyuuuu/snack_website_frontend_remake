const router = require("express").Router();
const {
  models: { OrderDetails, OrderItem, Product, ShoppingSession },
} = require("../db");

module.exports = router;

// ** CHECKOUT PAGE ** //
// create new orderDetail and add all orderItems (need userId)
// POST /api/orders/:id
router.post("/:id", async (req, res, next) => {
  try {
    const newOrder = await OrderDetails.create({
      userId: req.params.id,
      total: req.body.total,
    });
    console.log("here", newOrder);
    res.json(newOrder);
  } catch (err) {
    next(err);
  }
});

// create a new orderItem for cartItem (need productId)
// POST /api/orders/:id/orderItem
router.post("/:id/orderItem", async (req, res, next) => {
  try {
    const newOrderDetail = await OrderDetails.findAll({
      where: {
        userId: req.body.userId,
      },
    });
    const arr = newOrderDetail.map((od) => od.id);
    const newId = Math.max(...arr);
    const newOrderItem = await OrderItem.create({
      productId: req.params.id,
      orderDetailId: newId,
      quantity: req.body.quantity,
    });
    res.json(newOrderItem);
  } catch (err) {
    next(err);
  }
});

// create shoppingsession (need User ID)
// POST /api/orders/:id/shoppingsession

router.post("/:id/shoppingsession", async (req, res, next) => {
  try {
    const ss = await ShoppingSession.create({
      userId: req.params.id,
    });
    res.json(ss);
  } catch (err) {
    next(err);
  }
});

// delete shoppingsession (need shoppingsession ID)
// DELETE /api/orders/:id/shoppingsession

router.delete("/:id/shoppingsession", async (req, res, next) => {
  try {
    const ss = await ShoppingSession.findByPk(req.params.id);
    await ss.destroy();
    res.send(ss);
  } catch (error) {
    next(error);
  }
});

// ** CHECKOUT PAGE ** //

// ** ORDER HISTORY PAGE ** //
// get all orders based on userId
// GET /api/orders/:id
router.get("/:id", async (req, res, next) => {
  try {
    const orders = await OrderDetails.findAll({
      where: {
        userId: req.params.id,
      },
      include: [
        {
          model: OrderItem,
          include: {
            model: Product,
            attributes: ["name", "price", "photoURL"],
          },
        },
      ],
    });
    res.json(orders);
  } catch (err) {
    next(err);
  }
});

// ** ORDER HISTORY PAGE ** //
