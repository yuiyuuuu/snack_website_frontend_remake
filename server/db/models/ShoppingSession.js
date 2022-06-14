const Sequelize = require("sequelize");
const db = require("../db");

const ShoppingSession = db.define("shopping_session", {
  total: {
    type: Sequelize.DECIMAL,
  },
});

module.exports = ShoppingSession;
