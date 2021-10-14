const { getProducts, getProductById } = require('../controllers/products');
const asyncHandler = require('../middlewares/asyncHandler');
const router = require('express').Router();

router.get('/', asyncHandler(getProducts));
router.get('/:id', asyncHandler(getProductById));
module.exports = router;
