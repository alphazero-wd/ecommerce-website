import { configureStore } from '@reduxjs/toolkit';
import products from './reducers/products';
import product from './reducers/product';

export default configureStore({
  reducer: {
    products: products,
    product: product,
  },
});
