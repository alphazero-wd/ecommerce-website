import { configureStore } from '@reduxjs/toolkit';
import products from './reducers/products';
import product from './reducers/product';
import cart from './reducers/cart';
import user from './reducers/user';

export default configureStore({
  reducer: {
    products,
    product,
    cart,
    user,
  },
});
