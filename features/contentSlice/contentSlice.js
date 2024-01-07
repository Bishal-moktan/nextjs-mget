import { createSlice } from '@reduxjs/toolkit';

import metaContent from '@/data/metaContent';
import { checkTime } from '@/utils/checkTime';

const initialState = {
  metaContent,
  isOfficeOpened: checkTime(),
  mainUrl: 'http://localhost:3000/',
  isSidebarOpen: false,
  title: 'Empowering the World with Solar Energy',
  activeContent: 0,
  activeNavLink: 0,
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
    changeActiveNavLink(state, action) {
      console.log(action.payload);
      state.activeNavLink = action.payload;
    },
  },
});

export const { changeActive, openSidebar, closeSidebar, changeActiveNavLink } =
  contentSlice.actions;

export default contentSlice.reducer;
