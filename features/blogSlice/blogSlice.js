import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: false,
  error: null,
  posts: [],
  totalPosts: null,
};

// const url = 'http://localhost/server/server.php';
const url = 'https://mget-demo.000webhostapp.com/server.php';

// fetch post
export const fetchBlogPosts = createAsyncThunk(
  'blog/fetchBlogPosts',
  async (payload, thunkAPI) => {
    try {
      const res = await axios(`${url}?offset=${payload}`);
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
        const newPosts = action.payload.posts.filter(
          (newPost) =>
            !state.posts.some((existingPost) => existingPost.id === newPost.id)
        );
        state.posts = [...state.posts, ...newPosts];
        state.totalPosts = action.payload.totalCount;
      })
      .addCase(fetchBlogPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default BlogSlice.reducer;
