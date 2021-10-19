import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: JSON.parse(localStorage.getItem('cart')) || [],
    totalPrice: 0,
    totalQuantity: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },

    updateQuantity: (state, action) => {
      const cartItem = state.cart.find(
        (product) => product._id === action.payload._id
      );

      if (cartItem) {
        cartItem.quantity = action.payload.quantity;
      }
    },

    deleteCartItem: (state, action) => {
      const index = state.cart.findIndex(
        (product) => product._id === action.payload
      );

      if (index !== -1) {
        state.cart.splice(index, 1);
      }
    },

    clearCart: (state) => {
      state.cart = [];
    },

    updateTotal: (state) => {
      const totals = state.cart.reduce(
        (total, product) => {
          total.price += product.price * product.quantity;
          total.quantity += product.quantity;
          return total;
        },
        {
          price: 0,
          quantity: 0,
        }
      );

      state.totalPrice = totals.price.toFixed(2);
      state.totalQuantity = totals.quantity;
    },
  },
});

export const {
  updateTotal,
  addToCart,
  updateQuantity,
  deleteCartItem,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
