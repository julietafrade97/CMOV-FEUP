const db = require('../models');

/**
 * Verifies if basket and request is valid, checks if payment is successful and creates a basket and saves it to user.
 * Updates user total accumulated.
 */
exports.checkoutBasket = async function (req, res, next) {
  try {
    console.log(req);
    res.status(200).json('Checkout Basket Route in the works...');
  } catch (error) {
    next(error);
  }
};

exports.listBaskets = async function (req, res, next) {
  try {
    db.ShoppingBasket.find({ user: req.body.user_id })
      .then((baskets) => {
        res.status(200).json(baskets);
      })
      .catch((err) => next(err));
  } catch (error) {
    next(error);
  }
};

exports.listVouchers = async function (req, res, next) {
  try {
    db.Voucher.find({ user: req.query.user_id })
      .then((vouchers) => {
        res.status(200).json(vouchers);
      })
      .catch((err) => next(err));
  } catch (error) {
    next(error);
  }
}

exports.getDiscount = async function (req, res, next) {
  try {
    db.User.findOne({ _id: req.query.user_id })
      .then((user) => {
        res.status(200).json(user.total_accumulated);
      })
      .catch((err) => next(err));
  } catch (error) {
    next(error);
  }
}
