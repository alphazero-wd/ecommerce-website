const {
  getCart,
  addToCart,
  updateQuantity,
  deleteCartItem,
} = require('../controllers/cart');
const auth = require('../middlewares/auth');
const router = require('express').Router();

router.route('/').get(auth, getCart).post(auth, addToCart);
router.route('/:id').put(auth, updateQuantity).delete(auth, deleteCartItem);

module.exports = router;
