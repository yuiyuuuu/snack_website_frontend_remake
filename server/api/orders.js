const router = require('express').Router();
const {
  models: { OrderDetails, OrderItem },
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
    });
    res.json(orders);
  } catch (err) {
    next(err);
  }
});
