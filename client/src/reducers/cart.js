import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../api';
export const getCart = createAsyncThunk('cart/getCart', async () => {
  try {
    const { data } = await api.getCart();
    return data.data;
  } catch (error) {
    console.log(error);
  }
});

export const addToCart = createAsyncThunk(
  'cart/addToCart',
  async (cartItem) => {
    try {
      const { data } = await api.addToCart(cartItem);
      return data.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const updateQuantity = createAsyncThunk(
  'cart/updateQuantity',
  async (cartItem) => {
    try {
      const { data } = await api.updateQuantity(cartItem);
      return data.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const deleteCartItem = createAsyncThunk(
  'cart/deleteCartItem',
  async (id) => {
    try {
      await api.deleteCartItem(id);
      return id;
    } catch (error) {
      console.log(error);
    }
  }
);

export const clearCart = createAsyncThunk('cart/clearCart', async () => {
  try {
    await api.clearCart();
  } catch (error) {
    console.log(error);
  }
});

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
    loading: false,
    totalPrice: 0,
    totalQuantity: 0,
  },
  reducers: {
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
  extraReducers: (builder) => {
    builder
      .addCase(getCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCart.fulfilled, (state, action) => {
        state.loading = false;
        state.cart = action.payload;
      });

    builder.addCase(addToCart.fulfilled, (state, action) => {
      state.cart.push(action.payload);
    });

    builder.addCase(updateQuantity.fulfilled, (state, action) => {
      const cartItem = state.cart.find(
        (product) => product._id === action.payload._id
      );
      cartItem.quantity = action.payload.quantity;
    });

    builder.addCase(deleteCartItem.fulfilled, (state, action) => {
      state.cart = state.cart.filter(
        (product) => product._id !== action.payload
      );
    });

    builder.addCase(clearCart.fulfilled, (state, action) => {
      state.cart = [];
    });
  },
});

export const { updateTotal } = cartSlice.actions;
export default cartSlice.reducer;
