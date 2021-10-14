const Product = require('../models/Product');
const ErrorResponse = require('../utils/ErrorResponse');
const { FindQueries, MapQueries } = require('../utils/Queries');

const getProducts = async (req, res) => {
  const findQuery = new FindQueries();
  const mapQuery = new MapQueries();

  const { getFindQueries } = findQuery;
  const { getMapQueries } = mapQuery;

  findQuery.setFindQueries = req;
  mapQuery.setMapQueries = req;
  const products = await Product.find(getFindQueries)
    .sort(getMapQueries.sort)
    .skip(getMapQueries.skip)
    .limit(getMapQueries.limit)
    .select(getMapQueries.fields);

  return res.status(200).json({
    success: true,
    nbHits: products.length,
    data: products,
  });
};

const getProductById = async (req, res, next) => {
  const { id } = req.params;
  if (id) {
    const product = await Product.findById(id);
    return res.status(200).json({
      success: true,
      data: product,
    });
  } else {
    return next(new ErrorResponse(`No Product Found With the ID: ${id}`, 404));
  }
};

module.exports = {
  getProductById,
  getProducts,
};
