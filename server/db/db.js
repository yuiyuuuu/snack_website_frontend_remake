const Sequelize = require("sequelize");
const pkg = require("../../package.json");
const env = require("dotenv").config();

const databaseName =
  pkg.name + (process.env.NODE_ENV === "test" ? "-test" : "");

const config = {
  logging: false,
};

if (process.env.LOGGING === "true") {
  delete config.logging;
}

//https://stackoverflow.com/questions/61254851/heroku-postgres-sequelize-no-pg-hba-conf-entry-for-host
if (process.env.DATABASE_URL) {
  config.dialectOptions = {
    ssl: {
      rejectUnauthorized: false,
    },
  };
}
console.log(process.env.DATABASE_URL);
const db = new Sequelize(
  process.env.DATABASE_URL,
  //`postgres://localhost:5432/bullseye`
  config
);
module.exports = db;
