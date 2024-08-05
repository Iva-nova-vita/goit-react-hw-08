import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

axios.defaults.baseURL = 'https://connections-api.goit.global/';
const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const register = createAsyncThunk(
  'auth/register',
  async (newUser, thunkAPI) => {
    try {
        const response = await axios.post('/users/signup', newUser)
        setAuthHeader(response.data.token);
        return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message || error.message);
    }
  }
)

export const login = createAsyncThunk(
  'auth/login',
  async (user, thunkAPI) => {
    try {
        const response = await axios.post('/users/login', user)
        setAuthHeader(response.data.token);
        return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message || error.message);
    }
  }
)

export const logout = createAsyncThunk(
  'auth/logout',
  async (user, thunkAPI) => {
    try {
        const response = await axios.post('/users/logout', user)
        setAuthHeader('');
        return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message || error.message);
    }
  }
)
