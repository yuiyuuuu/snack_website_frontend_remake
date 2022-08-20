const router = require("express").Router();
const {
  models: { ContactMessages },
} = require("../db");

router.get("/", async (req, res, next) => {
  try {
    const messages = await ContactMessages.findAll();
    res.send(messages);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const messages = await ContactMessages.create(req.body);
    res.send(messages);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const messages = await ContactMessages.findByPk(req.params.id);
    await messages.destroy();
    res.send(messages);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
