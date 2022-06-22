const Sequelize = require('sequelize');
const db = require('../db');

const ShoppingSession = db.define('shopping_session', {
  total: {
    type: Sequelize.DECIMAL(10, 2),
  },
});

module.exports = ShoppingSession;
