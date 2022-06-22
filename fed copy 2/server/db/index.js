//this is the access point for all things database related!
const db = require('./db');

const User = require('./models/User');
const ShoppingSession = require('./models/ShoppingSession');
const CartItem = require('./models/CartItem');
const Product = require('./models/Product');
const ProductCategory = require('./models/ProductCategory');
const OrderItem = require('./models/OrderItem');
const OrderDetails = require('./models/OrderDetails');

//associations could go here!
User.hasOne(ShoppingSession);
ShoppingSession.belongsTo(User);

ShoppingSession.hasMany(CartItem);
CartItem.belongsTo(ShoppingSession);

Product.hasOne(CartItem);
CartItem.belongsTo(Product);

ProductCategory.hasMany(Product);
Product.belongsTo(ProductCategory, {
  as: 'cat',
  foreignKey: 'productCategoryId',
});

Product.hasOne(OrderItem);
OrderItem.belongsTo(Product);

OrderItem.belongsTo(OrderDetails);
OrderDetails.hasMany(OrderItem);

User.hasMany(OrderDetails);
OrderDetails.belongsTo(User);

module.exports = {
  db,
  models: {
    User,
    ShoppingSession,
    CartItem,
    Product,
    ProductCategory,
    OrderItem,
    OrderDetails,
  },
};
