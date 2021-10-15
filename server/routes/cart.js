const { getCart, addToCart, updateQuantity } = require('../controllers/cart');

const router = require('express').Router();

router.route('/').get(getCart).post(addToCart);
router.route('/:id').put(updateQuantity);

module.exports = router;
