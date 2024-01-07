import { url } from '@/data/baseUrl';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: false,
  error: null,
  posts: [],
  totalPosts: null,
  post: {},
};

// fetch post
export const fetchBlogPosts = createAsyncThunk(
  'blog/fetchBlogPosts',
  async (payload, thunkAPI) => {
    try {
      const res = await axios(`${url}/server/server.php?offset=${payload}`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
  }
);

const BlogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    addPost(state, action) {
      state.posts = action.payload.posts;
      state.totalPosts = action.payload.totalCount;
    },
    singlePost(state, action) {
      state.post = action.payload;
    },
  },
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

export const { addPost } = BlogSlice.actions;

export default BlogSlice.reducer;
