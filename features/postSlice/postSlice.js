import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

const initialState = {
  loading: false,
  error: null,
  posts: [],
  fetchSinglePostLoading: false,
  postComplete: false,
  deleteComplete: false,
  fetchSinglePostError: null,
  singlePost: {},
};

const url = 'https://mgetenegy-blog.onrender.com/api/';
// const url = 'http://localhost:8800/api/';

//fetch all posts
export const fetchAllPost = createAsyncThunk(
  'post/fetchAllPost',
  async (payload, { rejectWithValue }) => {
    try {
      const res = await axios.get(url + 'posts');
      return res.data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

//fetch single post
export const fetchSinglePost = createAsyncThunk(
  'post/fetchSinglePost',
  async (payload, { rejectWithValue }) => {
    try {
      const res = await axios.get(url + `posts/${payload}`);
      return res.data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

//detele post
export const deletePost = createAsyncThunk(
  'post/deletePost',
  async (payload, { rejectWithValue }) => {
    try {
      const res = await axios.delete(url + `posts/${payload}`);
      return res.data;
    } catch (error) {
      rejectWithValue(error.res.data);
    }
  }
);

//post data
export const postBlog = createAsyncThunk(
  'post/postBlog',
  async (payload, { rejectWithValue }) => {
    try {
      const res = await axios.post(url + 'posts', payload);
      return res.data;
    } catch (err) {
      rejectWithValue(err.response.data);
    }
  }
);

//update data
export const updateBlog = createAsyncThunk(
  'post/updateBlog',
  async (payload, { rejectWithValue }) => {
    console.log(payload.desc);
    try {
      const res = await axios.put(url + `posts/${payload.postId}`, {
        title: payload.title,
        desc: payload.desc,
        date: payload.date,
      });
      return res.data;
    } catch (err) {
      rejectWithValue(err.response.data);
    }
  }
);

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {},
  extraReducers: (builders) => {
    // fetch all posts
    builders
      .addCase(fetchAllPost.pending, (state, action) => {
        state.deleteComplete = false;
        state.postComplete = false;
        state.loading = true;
      })
      .addCase(fetchAllPost.fulfilled, (state, action) => {
        state.loading = false;
        state.postComplete = false;
        state.deleteComplete = false;
        state.posts = action.payload;
      })
      .addCase(fetchAllPost.rejected, (state, action) => {
        state.loading = false;
        state.deleteComplete = false;
        state.error = action.payload;
      });

    //fetch single post
    builders
      .addCase(fetchSinglePost.pending, (state, action) => {
        state.fetchSinglePostLoading = true;
      })
      .addCase(fetchSinglePost.fulfilled, (state, action) => {
        state.fetchSinglePostLoading = false;
        state.singlePost = action.payload;
      })
      .addCase(fetchSinglePost.rejected, (state, action) => {
        state.fetchSinglePostLoading = false;
        state.fetchSinglePostError = action.payload;
      });
    //delete post
    builders
      .addCase(deletePost.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.loading = false;
        toast.success('Successfully deleted', {
          position: 'bottom-left',
        });
        state.deleteComplete = true;
      })
      .addCase(deletePost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        toast.error('Cannot delete, please try again', {
          position: 'bottom-left',
        });
      });
    //post blog
    builders
      .addCase(postBlog.pending, (state, action) => {
        state.loading = true;
        state.postComplete = false;
      })
      .addCase(postBlog.fulfilled, (state, action) => {
        state.loading = false;
        state.postComplete = true;
        toast.success(action.payload, {
          position: 'bottom-left',
        });
      })
      .addCase(postBlog.rejected, (state, action) => {
        state.loading = false;
        state.postComplete = false;
        state.error = action.payload;
        toast.error(action.payload, {
          position: 'bottom-left',
        });
      });
    //update blog
    builders
      .addCase(updateBlog.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(updateBlog.fulfilled, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        toast.success(action.payload, {
          position: 'bottom-left',
        });
        state.postComplete = true;
      })
      .addCase(updateBlog.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        toast.error(action.payload, {
          position: 'bottom-left',
        });
      });
  },
});

export default postSlice.reducer;
