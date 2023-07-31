import { createSlice } from '@reduxjs/toolkit';

import metaContent from '@/data/metaContent';
import { checkTime } from '@/utils/checkTime';

const initialState = {
  metaContent,
  isOfficeOpened: checkTime(),
  mainUrl: 'https://www.mgetenergy.com/',
  isSidebarOpen: false,
  title: 'Empowering the World with Solar Energy',
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
