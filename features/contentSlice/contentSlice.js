import { createSlice } from '@reduxjs/toolkit';

import metaContent from '@/data/metaContent';
import solutions from '@/data/solutions';
import services from '@/data/services';

const initialState = {
  metaContent,
  solutions,
  services,
  isSidebarOpen: false,
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
    openSidebar(state, action) {
      state.isSidebarOpen = true;
    },
    closeSidebar(state, action) {
      state.isSidebarOpen = false;
    },
  },
});

export const { changeActive, openSidebar, closeSidebar } = contentSlice.actions;

export default contentSlice.reducer;
