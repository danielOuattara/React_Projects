import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./menus/menus-slice";

const store = configureStore({
  reducer: {
    menus: menuReducer,
  },
});

export default store;
