const {
  models: { User },
} = require('../db');

const requireToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    console.log('token>>>>>>>>>>>>>>>', req.headers);
    const user = await User.findByToken(token);
    req.user = user;
    next();
  } catch (e) {
    next(e);
  }
};
const isAdmin = (req, res, next) => {
  if (!req.user.isAdmin) {
    return res.status(403).send('You shall not pass');
  } else {
    next();
  }
};

module.exports = {
  requireToken,
  isAdmin,
};
