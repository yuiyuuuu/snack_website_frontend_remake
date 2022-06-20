const router = require('express').Router();
const {
  models: { OrderDetails, OrderItem, Product },
} = require('../db');

module.exports = router;

// GET ALL ORDERS FOR USER(id)
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
