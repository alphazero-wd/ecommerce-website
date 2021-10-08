const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  featured: {
    type: Boolean,
    default: false,
  },
  stars: {
    type: Number,
    default: 2.5,
  },
  availability_quantity: {
    type: Number,
    default: 0,
  },
  price: {
    type: Number,
    default: 0,
  },
  description: {
    type: String,
    default: 'No Description Provided for the Product',
  },
});
module.exports = mongoose.model('Product', ProductSchema);
