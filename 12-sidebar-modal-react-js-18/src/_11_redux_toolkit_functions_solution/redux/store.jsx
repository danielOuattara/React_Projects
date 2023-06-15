import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./sidebar/sidebar-slice";

export default configureStore({
  reducer: {
    sidebarState: sidebarReducer,
  },
});
