import { configureStore } from '@reduxjs/toolkit';
import contentReducer from '@/features/contentSlice/contentSlice';
import blogReducer from '@/features/blogSlice/blogSlice';

export const store = configureStore({
  reducer: {
    content: contentReducer,
    blog: blogReducer,
  },
});
