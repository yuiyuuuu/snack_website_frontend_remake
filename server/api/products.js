const router = require('express').Router();
const {
  models: { Product, ProductCategory, CartItem },
} = require('../db');

module.exports = router;

// GET ALL PRODUCTS
// GET /api/products/
router.get('/', async (req, res, next) => {
  try {
    const products = await Product.findAll({
      include: {
        model: ProductCategory,
        as: 'cat',
      },
    });
    res.json(products);
  } catch (err) {
    next(err);
  }
});

// GET SINGLE PRODUCT
// GET /api/products/:id
router.get('/:id', async (req, res, next) => {
  try {
    const singleProduct = await Product.findByPk(req.params.id, {
      include: {
        model: ProductCategory,
        as: 'cat',
      },
    });
    res.json(singleProduct);
  } catch (err) {
    next(err);
  }
});

// CREATE NEW PRODUCT
// POST /api/products/
router.post('/', async (req, res, next) => {
  try {
    res.status(201).send(await Product.create(req.body));
  } catch (err) {
    next(err);
  }
});

// DELETE EXISTING PRODUCT
// DELETE /api/products/:id
router.delete('/:id', async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.id);
    await product.destroy();
    res.send(product);
  } catch (error) {
    next(error);
  }
});

// UPDATES PRODUCT QUANTITY, CART ITEM, SHOPPING SESSION TOTAL at CHECKOUT

// req.body should contain updated Product Quantity
// PUT /api/products/:id
router.put('/:id', async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.id, {
      include: ProductCategory,
    });
    res.send(await product.update(req.body));
  } catch (error) {
    next(error);
  }
});

// req.body should contain updated cart quantity and session id from useSelector
// PUT /api/products/:id/cartItem
router.put('/:id/cartItem', async (req, res, next) => {
  try {
    const cartItem = await CartItem.findOrCreate({
      where: {
        productId: req.params.id,
      },
      defaults: {
        productId: req.params.id,
        quantity: req.body.quantity,
        shoppingSessionId: req.body.shoppingSessionId,
      },
    });
    res.send(await cartItem.update(req.body));
  } catch (error) {
    next(error);
  }
});
