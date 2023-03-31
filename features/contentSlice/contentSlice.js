import { createSlice } from '@reduxjs/toolkit';

import metaContent from '@/data/metaContent';
import solutions from '@/data/solutions';
import services from '@/data/services';

const initialState = {
  metaContent,
  solutions,
  services,
  title:
    'Empowering the World with Solar Energy: Maxoptimus Green Energy Tech Pvt Ltd',
  activeContent: 0,
};

const contentSlice = createSlice({
  name: 'content',
  initialState,
  reducers: {
    changeActive(state, action) {
      state.activeContent = action.payload;
    },
  },
});

export const { changeActive } = contentSlice.actions;

export default contentSlice.reducer;
