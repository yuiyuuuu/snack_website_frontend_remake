const Sequelize = require('sequelize');
const db = require('../db');

const OrderDetails = db.define('order_details', {
  total: {
    type: Sequelize.DECIMAL,
  },
});

module.exports = OrderDetails;
