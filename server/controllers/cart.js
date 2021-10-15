const Cart = require('../models/Cart');
const ErrorResponse = require('../utils/ErrorResponse');

const getCart = async (_req, res) => {
  const cart = await Cart.find({});
  return res.status(200).json({
    success: true,
    nbHits: cart.length,
    data: cart,
  });
};

const addToCart = async (req, res, next) => {
  const { name, price, availability_quantity, featured } = req.body;

  const inCart = await Cart.findOne({ name });

  if (inCart)
    return next(new ErrorResponse('Product is Already In Cart.', 400));

  if (availability_quantity === 0)
    return next(new ErrorResponse('Product is Out Of Stock.', 400));

  const newCartItem = await Cart.create({
    name,
    price: featured ? Math.round(price / 2, 1) : price,
    availability_quantity,
    featured,
  });

  return res.status(201).json({
    success: true,
    data: newCartItem,
  });
};

const updateQuantity = async (req, res, next) => {
  const { id } = req.params;
  const { quantity } = req.body;
  const cartItem = await Cart.findById(id);

  if (!cartItem)
    return next(new ErrorResponse(`No Product Found With the ID: ${id}`, 404));

  if (isNaN(parseInt(quantity)))
    return next(new ErrorResponse('Quantity Must Be A Number.', 400));

  if (parseInt(quantity) > parseInt(cartItem.availability_quantity))
    return next(
      new ErrorResponse(
        'Product Quantity Must Not Be Greater Than Available Quantity.',
        400
      )
    );

  const updatedCartItem = await Cart.findByIdAndUpdate(
    id,
    {
      quantity,
      availability_quantity:
        parseInt(cartItem.availability_quantity) - parseInt(quantity),
    },
    {
      runValidators: true,
      new: true,
    }
  );

  return res.status(200).json({
    success: true,
    data: updatedCartItem,
  });
};

module.exports = { getCart, addToCart, updateQuantity };
