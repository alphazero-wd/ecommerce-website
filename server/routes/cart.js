const {
  getCart,
  addToCart,
  updateQuantity,
  deleteCartItem,
} = require('../controllers/cart');

const router = require('express').Router();

router.route('/').get(getCart).post(addToCart);
router.route('/:id').put(updateQuantity).delete(deleteCartItem);

module.exports = router;
