const router = require("express").Router();
const { ContactMessages } = require("../db");

router.get("/messages", async (req, res, next) => {
  try {
    const messages = await ContactMessages.findAll();
    res.send(messages);
  } catch (error) {
    next(error);
  }
});

router.post("/messages", async (req, res, next) => {
  try {
    const messages = await ContactMessages.create(req.body);
    res.send(messages);
  } catch (error) {
    next(error);
  }
});

router.delete("/messages", async (req, res, next) => {
  try {
    const messages = await ContactMessages.findByPk(req.body);
    await messages.destroy();
    res.send(messages);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
