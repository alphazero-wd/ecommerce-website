const Cart = require("../models/Cart");
const ErrorResponse = require("../utils/ErrorResponse");

const getCart = async (req, res, next) => {
  try {
    const cart = await Cart.find({});
    return res.status(200).json({
      success: true,
      nbHits: cart.length,
      data: cart,
    });
  } catch (error) {
    next(error);
  }
};

const addToCart = async (req, res, next) => {
  try {
    const {
      name,
      price,
      availability_quantity,
      featured,
      productId,
      user,
      userId,
    } = req.body;

    if (availability_quantity === 0)
      return next(new ErrorResponse("Product is Out Of Stock.", 400));

    const newCartItem = await Cart.create({
      name,
      price: featured ? Math.round(price / 2) : price,
      availability_quantity,
      featured,
      productId,
      user,
      userId,
    });

    return res.status(201).json({
      success: true,
      data: newCartItem,
    });
  } catch (error) {
    next(error);
  }
};

const updateQuantity = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { quantity } = req.body;
    const cartItem = await Cart.findById(id);

    if (!cartItem)
      return next(
        new ErrorResponse(`No Product Found With the ID: ${id}`, 404)
      );

    if (isNaN(parseInt(quantity)))
      return next(new ErrorResponse("Quantity Must Be A Number.", 400));

    if (parseInt(quantity) > parseInt(cartItem.availability_quantity))
      return next(
        new ErrorResponse(
          "Product Quantity Must Not Be Greater Than Available Quantity.",
          400
        )
      );

    const updatedCartItem = await Cart.findByIdAndUpdate(
      id,
      {
        quantity,
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
  } catch (error) {
    next(error);
  }
};

const deleteCartItem = async (req, res, next) => {
  try {
    const { id } = req.params;

    const inCart = await Cart.findById(id);
    if (!inCart)
      return next(
        new ErrorResponse(`No Product Found With the ID: ${id}`, 404)
      );

    await inCart.remove();

    return res.status(200).json({
      success: true,
      message: "Cart Item Removed",
    });
  } catch (error) {
    next(error);
  }
};

const clearCart = async (req, res, next) => {
  try {
    await Cart.deleteMany();
    return res.status(200).json({
      success: true,
      nbHits: 0,
      data: [],
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getCart,
  addToCart,
  updateQuantity,
  deleteCartItem,
  clearCart,
};
