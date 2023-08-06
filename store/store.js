import { combineReducers, configureStore } from '@reduxjs/toolkit';
import contentReducer from '@/features/contentSlice/contentSlice';
import blogReducer from '@/features/blogSlice/blogSlice';
import { HYDRATE, createWrapper } from 'next-redux-wrapper';

const combinedReducer = combineReducers({
  content: contentReducer,
  blog: blogReducer,
});

// const masterReducer = (state, action) => {
//   if (action.type === HYDRATE) {
//     const nextState = {
//       ...state,
//       posts: [...state.blog.posts, ...action.payload.posts],
//       post: action.payload.post,
//     };
//   } else {
//     return combinedReducer(state, action);
//   }
// };

const makeStore = () =>
  configureStore({
    reducer: combinedReducer,
  });

export const wrapper = createWrapper(makeStore, { debug: true });
