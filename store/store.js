import { configureStore } from '@reduxjs/toolkit';
import authReducer from '@/features/authSlice/authSlice';
import postReducer from '@/features/postSlice/postSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    post: postReducer,
  },
});
