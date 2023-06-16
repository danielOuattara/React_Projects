import { createStore, combineReducers } from "redux";
import { stripeSubMenusReducer } from "./stripeSubMenus/stripeSubMenusReducer";

export default createStore(
  combineReducers({
    stripeSubMenusState: stripeSubMenusReducer,
  }),
);
