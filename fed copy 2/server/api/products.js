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
      order: [['id', 'ASC']],
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
    const product = await Product.create(req.body);
    const createdproduct = await Product.findByPk(product.id, {
      include: {
        model: ProductCategory,
        as: 'cat',
      },
    });
    res.status(201).send(createdproduct);
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
    const product = await Product.findByPk(req.params.id);
    await product.update(req.body);
    const updateproduct = await Product.findByPk(req.params.id, {
      include: {
        model: ProductCategory,
        as: 'cat',
      },
    });
    res.send(updateproduct);
  } catch (error) {
    next(error);
  }
});

// POST /api/products/:id/cartItem
router.post('/:id/cartItem', async (req, res, next) => {
  try {
    const cartItem = await CartItem.create(req.body);
    const updatedCartItem = await CartItem.findByPk(cartItem.id, {
      include: {
        model: Product,
      },
    });
    res.send(updatedCartItem);
  } catch (error) {
    next(error);
  }
});

// PUT /api/products/:id/cartItem
router.put('/:id/cartItem', async (req, res, next) => {
  try {
    const cartItem = await CartItem.findOne({
      where: { productId: req.params.id },
    });
    const updated = await cartItem.update(req.body);
    const updatedCartItem = await CartItem.findByPk(updated.id, {
      include: {
        model: Product,
      },
    });
    res.send(updatedCartItem);
  } catch (error) {
    next(error);
  }
});

// DELETE /api/products/:id/cartItem
router.delete('/:id/cartItem', async (req, res, next) => {
  try {
    const cartItem = await CartItem.findByPk(req.params.id);
    await cartItem.destroy();
    res.send(cartItem);
  } catch (error) {
    next(error);
  }
});
