import { configureStore } from "@reduxjs/toolkit";
import groceryReducer from "./grocery/grocery-slice";

export default configureStore({
  reducer: {
    groceryState: groceryReducer,
  },
});
