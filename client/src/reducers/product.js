import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../api';
export const getProductById = createAsyncThunk(
  'product/getProduct',
  async (id) => {
    const { data } = await api.getProductById(id);
    return data.data;
  }
);

const productSlice = createSlice({
  name: 'product',
  initialState: {
    loading: true,
    product: {},
  },
  extraReducers: {
    [getProductById.pending]: (state) => {
      state.loading = true;
    },
    [getProductById.fulfilled]: (state, action) => {
      state.loading = false;
      state.product = action.payload;
    },
  },
});
export default productSlice.reducer;
