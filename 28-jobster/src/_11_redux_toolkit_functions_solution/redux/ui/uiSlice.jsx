import { createSlice } from "@reduxjs/toolkit";

const initialUIState = {
  isSidebarOpen: false,
  isShowLogoutOpen: false,
};

const uiSlice = createSlice({
  name: "ui-slice",
  initialState: initialUIState,
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    closeSidebar: (state) => {
      state.isSidebarOpen = false;
    },
    toggleShowLogout: (state) => {
      state.isShowLogoutOpen = !state.isShowLogoutOpen;
    },

    resetUIStateUponLogout: () => initialUIState,
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;
