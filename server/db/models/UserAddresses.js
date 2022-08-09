const Sequelize = require("sequelize");
const db = require("../db");

const UserAddresses = db.define("user_addresses", {
  firstName: {
    type: Sequelize.STRING,
  },
  lastName: {
    type: Sequelize.STRING,
  },
  address: {
    type: Sequelize.STRING,
  },
  city: {
    type: Sequelize.STRING,
  },
  state: {
    type: Sequelize.STRING,
  },
  zip: {
    type: Sequelize.STRING,
  },
});
module.exports = UserAddresses;
