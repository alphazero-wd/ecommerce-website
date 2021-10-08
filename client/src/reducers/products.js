import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../api';
export const getProducts = createAsyncThunk(
  'products/getProducts',
  async (query) => {
    const { data } = await api.getProducts(query);
    return data;
  }
);

export const getApiInfo = createAsyncThunk('products/getApiInfo', async () => {
  const { data } = await api.getApiInfo();
  return data;
});

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    loading: true,
    products: [],
    displayedProducts: [],
    apiInfo: {},
  },
  extraReducers: {
    [getProducts.fulfilled]: (state, action) => {
      state.products = action.payload.data;
      state.loading = false;
    },
    [getApiInfo.fulfilled]: (state, action) => {
      state.apiInfo = action.payload;
    },
  },
});
export default productsSlice.reducer;
