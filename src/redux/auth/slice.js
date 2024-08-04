import { createSlice } from '@reduxjs/toolkit';
import { register} from './operations';
import toast from 'react-hot-toast';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
      user: {
        name: null,
        email: null,
      },
      token: null,
      isLoggedIn: false,
      isRefreshing: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
       
      })
      .addCase(register.rejected, (state, action) => {
        toast.error(action.payload)
      })
  },
});

export const selectAuth = (state) => state.contacts.auth;

export const authReducer = authSlice.reducer;
