import { createSlice } from "@reduxjs/toolkit";

const initialSidebarState = {
  isSidebarOpen: false,
  isModalOpen: false,
};

const sidebarSlice = createSlice({
  name: "sidebar-slice",
  initialState: initialSidebarState,
  reducers: {
    toggleSidebar(state, action) {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    toggleModal(state, action) {
      state.isModalOpen = !state.isModalOpen;
    },
  },
});

export const sidebarActions = sidebarSlice.actions;

export default sidebarSlice.reducer;
