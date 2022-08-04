const router = require("express").Router();
const { requireToken, isAdmin } = require("./gatekeepingMiddleware");
const {
  models: { User, ShoppingSession, CartItem, Product },
} = require("../db");

const UserAddresses = require("../db/models/UserAddresses");

module.exports = router;

// GET /api/users/
router.get("/", requireToken, isAdmin, async (req, res, next) => {
  try {
    const users = await User.findAll({
      order: [["id", "ASC"]],
    });
    res.json(users);
  } catch (err) {
    next(err);
  }
});

// GET /api/users/:id
router.get("/:id", async (req, res, next) => {
  try {
    //Nested eager loading user/shoppingSession/cartItem/product
    const singleUser = await User.findByPk(req.params.id, {
      include: [
        {
          model: ShoppingSession,
          include: {
            model: CartItem,
            include: { model: Product },
          },
        },
      ],
    });
    // console.log('IN THE API', singleUser);
    res.json(singleUser);
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const deleteUser = await User.findByPk(req.params.id);
    await deleteUser.destroy();
    res.json(deleteUser);
  } catch (err) {
    next(err);
  }
});

// PUT /api/users/:id
router.put("/:id", async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);
    res.send(await user.update(req.body));
  } catch (err) {
    next(err);
  }
});

router.get("/:id/useraddresses", async (req, res, next) => {
  try {
    const addresses = await UserAddresses.findAll({
      where: {
        userId: req.params.id,
      },
    });

    res.json(addresses);
  } catch (error) {
    next(error);
  }
});

router.post("/:id/useraddresses", async (req, res, next) => {
  try {
    const address = await UserAddresses.create(req.body);
    res.send(address);
  } catch (error) {
    next(error);
  }
});

router.put(":id/useraddresses", async (req, res, next) => {
  try {
    const address = await UserAddresses.findOne({
      where: {
        id: req.body.id,
      },
    });
    const update = await address.update(req.body);
    res.send(update);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id/useraddresses/:id2", async (req, res, next) => {
  try {
    const address = await UserAddresses.findByPk(req.params.id2);
    await address.destroy();
    res.send(address);
  } catch (error) {
    next(error);
  }
});

router.put("/:id/admin", async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);
    await user.update({
      isAdmin: !user.isAdmin,
    });

    res.json(user);
  } catch (err) {
    next(err);
  }
});
