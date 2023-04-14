import { createSlice } from '@reduxjs/toolkit';

import metaContent from '@/data/metaContent';
import solutions from '@/data/solutions';
import services from '@/data/services';

const initialState = {
  metaContent,
  solutions,
  services,
  mainUrl: 'https://nextjs-mget.vercel.app',
  isSidebarOpen: false,
  title: 'Empowering the World with Solar Energy',
  activeContent: 0,
  keywords:
    'solar panel installation, solar installation, solar panel installation cost, solar installer near me, solar panel installation cost in india, solar panel home installation, how to install solar panels at home, solar installation companies, solar planar installer near me, solar rooftop installer, solar rooftop installation',
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
