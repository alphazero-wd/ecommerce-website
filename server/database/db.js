const mongoose = require('mongoose');
const Product = require('../models/Product');
const products = require('../products.json');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.CONNECTION_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    // await Product.deleteMany();
    // await Product.create(products);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
module.exports = connectDB;
