const Sequelize = require("sequelize");
const db = require("../db");

const CartItem = db.define("cart_item", {
  quantity: {
    type: Sequelize.INTEGER,
    validate: {
      isNumeric: true,
    },
    defaultValue: 1,
  },
});

module.exports = CartItem;
