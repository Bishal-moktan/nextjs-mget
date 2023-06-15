import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: false,
  error: null,
  posts: [],
};

// const url = 'http://localhost/server/server.php';
const url = 'https://mget-demo.000webhostapp.com/server.php';

// fetch post
export const fetchBlogPosts = createAsyncThunk(
  'blog/fetchBlogPosts',
  async (payload, thunkAPI) => {
    try {
      const res = await axios(url);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
  }
);

const BlogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchBlogPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
      })
      .addCase(fetchBlogPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default BlogSlice.reducer;
