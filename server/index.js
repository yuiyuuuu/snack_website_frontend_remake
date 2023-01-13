const { db } = require("./db");
const PORT = process.env.PORT || 3002;
const app = require("./app");
const seed = require("../script/seed");
const env = require("dotenv").config();

const init = async () => {
  try {
    if (process.env.SEED === "true") {
      await seed();
    } else {
      await db.sync();
    }
    // start listening (and create a 'server' object representing our server)
    console.log(process.env.DATABASE_URL);
    app.listen(PORT, () => console.log(`Mixing it up on port ${PORT}`));
  } catch (ex) {
    console.log(ex);
  }
};

init();
