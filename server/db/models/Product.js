const Sequelize = require('sequelize');
const db = require('../db');

const Product = db.define('product', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  desc: {
    type: Sequelize.TEXT,
  },
  price: {
    type: Sequelize.DECIMAL,
    allowNull: false,
  },
  quantity: {
    type: Sequelize.INTEGER,
    validate: {
      isNumeric: true,
    },
    defaultValue: 100,
  },
  photoURL: {
    type: Sequelize.TEXT,
    defaultValue:
      'https://img.freepik.com/free-vector/cartoon-taco-drawing_125371-78.jpg?w=2000',
  },
});

module.exports = Product;
