import { configureStore } from "@reduxjs/toolkit";
import navbarReducer from "./navbar/navbar-slice";

export default configureStore({
  reducer: {
    navbarState: navbarReducer,
  },
});
