import { configureStore } from '@reduxjs/toolkit';
import authReducer from '@/features/authSlice/authSlice';
import postReducer from '@/features/postSlice/postSlice';
import contentReducer from '@/features/contentSlice/contentSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    post: postReducer,
    content: contentReducer,
  },
});
