//this is the access point for all things database related!
const db = require("./db");

const User = require("./models/User");
const ShoppingSession = require("./models/ShoppingSession");
const CartItem = require("./models/CartItem");
const Product = require("./models/Product");
const Inventory = require("./models/Inventory");

//associations could go here!
User.hasOne(ShoppingSession);
ShoppingSession.hasMany(CartItem);
Product.hasOne(CartItem);
Inventory.belongsTo(Product);

module.exports = {
  db,
  models: {
    User,
    ShoppingSession,
    CartItem,
    Product,
    Inventory,
  },
};
