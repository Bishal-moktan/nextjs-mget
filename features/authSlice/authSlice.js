import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

let userData;
if (typeof window !== 'undefined') {
  // Perform localStorage action
  userData = JSON.parse(localStorage.getItem('user')) || null;
}

// initial state
const initialState = {
  user: userData,
  loading: false,
  logoutComplete: false,
  loginComplete: false,
  error: null,
};

const url = 'https://mgetenegy-blog.onrender.com/api/';
// const url = 'http://localhost:8800/api/';

//login action
export const loginUser = createAsyncThunk(
  'auth/login',
  async (payload, { rejectWithValue }) => {
    try {
      const res = await axios.post(url + 'auth/login', payload);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

//user logut
export const logoutUser = createAsyncThunk(
  'auth/logout',
  async (payload, { rejectWithValue }) => {
    try {
      const res = await axios.post(url + 'auth/logout');
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // login user
    builder
      .addCase(loginUser.pending, (state, action) => {
        state.loading = true;
        state.error = null;
        state.logoutComplete = false;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.logoutComplete = false;
        state.loginComplete = true;
        state.error = null;
        state.user = action.payload;
        localStorage.setItem('user', JSON.stringify(action.payload));
        toast.success('Login success!', {
          position: 'bottom-left',
        });
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.logoutComplete = false;

        state.user = null;
        localStorage.clear();
        toast.error(`${action.payload}`, {
          position: 'bottom-left',
        });
      });
    // logout user
    builder
      .addCase(logoutUser.pending, (state, action) => {
        state.loading = true;
        state.loginComplete = false;
      })
      .addCase(logoutUser.fulfilled, (state, action) => {
        state.loading = false;
        state.logoutComplete = true;
        state.loginComplete = false;

        localStorage.clear();
        toast.success(action.payload, {
          position: 'bottom-left',
        });
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.loginComplete = false;

        state.user = null;
        localStorage.clear();
        toast.error(`${action.payload}`, {
          position: 'bottom-left',
        });
      });
  },
});

export default authSlice.reducer;
