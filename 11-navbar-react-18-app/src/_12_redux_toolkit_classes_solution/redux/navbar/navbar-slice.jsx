import { createSlice } from "@reduxjs/toolkit";

const initialNavbarState = {
  showLinks: false,
};

const navbarSlice = createSlice({
  name: "navbar-slice",
  initialState: initialNavbarState,
  reducers: {
    setShowLinks(state, action) {
      state.showLinks = !state.showLinks;
    },
  },
});

export const navbarActions = navbarSlice.actions;

export default navbarSlice.reducer;
