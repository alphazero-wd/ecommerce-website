import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api";
export const signin = createAsyncThunk(
  "user/signin",
  async (authValue, { rejectWithValue }) => {
    try {
      const { data } = await api.signin(authValue);
      return data.user;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const signup = createAsyncThunk(
  "user/signup",
  async (authValue, { rejectWithValue }) => {
    try {
      const { data } = await api.signup(authValue);
      return data.user;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: JSON.parse(localStorage.getItem("user")),
    error: "",
  },

  reducers: {
    loginGoogleUser: (state, action) => {
      state.user = action.payload;
      state.error = "";
    },
    logout: state => {
      localStorage.clear();
      state.user = null;
    },
  },

  extraReducers: builder => {
    builder
      .addCase(signin.fulfilled, (state, action) => {
        state.user = action.payload;
        state.error = "";
      })
      .addCase(signin.rejected, (state, action) => {
        state.error = action.payload;
      });
    builder
      .addCase(signup.fulfilled, (state, action) => {
        state.user = action.payload;
        state.error = "";
      })
      .addCase(signup.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});
export const { loginGoogleUser, logout } = userSlice.actions;
export default userSlice.reducer;
