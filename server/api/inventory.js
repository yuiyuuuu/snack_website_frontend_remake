const router = require('express').Router();
const {
  models: { Inventory, Product },
} = require('../db');

module.exports = router;

router.get('/', async (req, res, next) => {
  try {
    const inventory = await Inventory.findAll();
    res.json(inventory);
  } catch (err) {
    next(err);
  }
});

router.get('/:productId', async (req, res, next) => {
  try {
    const productInventory = await Inventory.findPk({
      where: { productId: req.params.productId },
      include: [{ model: Product }],
    });
    res.json(productInventory);
  } catch (err) {
    next(err);
  }
});
