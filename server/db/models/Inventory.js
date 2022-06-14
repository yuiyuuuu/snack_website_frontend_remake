const Sequelize = require("sequelize");
const db = require("../db");

const Inventory = db.define("inventory", {
  quantity: {
    type: Sequelize.INTEGER,
    validate: {
      isNumeric: true,
    },
    defaultValue: 0,
  },
});

module.exports = Inventory;
