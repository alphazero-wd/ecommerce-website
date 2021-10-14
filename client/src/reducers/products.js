import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../api';
export const getProducts = createAsyncThunk(
  'products/getProducts',
  async (query) => {
    const { data } = await api.getProducts(query);
    return data;
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    loading: true,
    products: [],
  },
  extraReducers: {
    [getProducts.fulfilled]: (state, action) => {
      state.products = action.payload.data;
      state.loading = false;
    },
  },
});
export default productsSlice.reducer;
