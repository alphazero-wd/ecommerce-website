import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: JSON.parse(localStorage.getItem('user')),
    error: '',
  },

  reducers: {
    loginGoogleUser: (state, action) => {
      state.user = action.payload;
      state.error = '';
    },
    logout: (state) => {
      localStorage.clear();
      state.user = null;
    },
  },
});
export const { loginGoogleUser, logout } = userSlice.actions;
export default userSlice.reducer;
