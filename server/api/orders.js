const router = require('express').Router();
const {
  models: { OrderDetails, OrderItem, Product },
} = require('../db');

module.exports = router;

// ** CHECKOUT PAGE ** //
// create new orderDetail and add all orderItems (need userId)
// POST /api/orders/:id
router.post('/:id', async (req, res, next) => {
  try {
    const newOrder = await OrderDetails.create({
      userId: req.params.id,
    });
    res.json(newOrder);
  } catch (err) {
    next(err);
  }
});

// create a new orderItem for cartItem (need productId)
// POST /api/orders/orderItem
router.post('/:id', async (req, res, next) => {
  try {
    const newOrderItem = await OrderItem.create({
      productId: req.params.id,
    });
    res.json(newOrderItem);
  } catch (err) {
    next(err);
  }
});
// ** CHECKOUT PAGE ** //

// ** ORDER HISTORY PAGE ** //
// get all orders based on userId
// GET /api/orders/:id
router.get('/:id', async (req, res, next) => {
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
            attributes: ['name', 'price', 'photoURL'],
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
