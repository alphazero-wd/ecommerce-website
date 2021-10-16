const mongoose = require('mongoose');

const CartSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  availability_quantity: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    default: 1,
  },
  featured: {
    type: Boolean,
    default: false,
  },
  productId: {
    type: String,
    unique: true,
  },
});

module.exports = mongoose.model('Cart', CartSchema);
