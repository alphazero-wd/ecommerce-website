const { getProducts, getProduct, getInfo } = require('../controllers/products');
const asyncHandler = require('../middlewares/asyncHandler');
const router = require('express').Router();

router.get('/', asyncHandler(getProducts));
router.get('/info', asyncHandler(getInfo));
router.get('/:id', asyncHandler(getProduct));
module.exports = router;
