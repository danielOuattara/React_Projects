import { configureStore } from "@reduxjs/toolkit";
import stripeSubMenusReducer from "./stripeSubMenus/stripeSubMenus-slice";

export default configureStore({
  reducer: {
    stripeSubMenusState: stripeSubMenusReducer,
  },
});
