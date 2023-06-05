import { createStore, combineReducers } from "redux";
import menuReducer from "./menus/menusReducer";

export default createStore(
  combineReducers({
    menus: menuReducer,
  }),
);
