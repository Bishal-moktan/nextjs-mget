import { configureStore } from '@reduxjs/toolkit';
import contentReducer from '@/features/contentSlice/contentSlice';

export const store = configureStore({
  reducer: {
    content: contentReducer,
  },
});
