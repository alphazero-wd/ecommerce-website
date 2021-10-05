const { getProducts } = require('../controllers/products');
const asyncHandler = require('../middlewares/asyncHandler');
const router = require('express').Router();

router.get('/', asyncHandler(getProducts));

module.exports = router;
