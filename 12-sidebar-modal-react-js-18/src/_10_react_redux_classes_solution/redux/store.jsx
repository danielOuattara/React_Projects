import { createStore, combineReducers } from "redux";
import { sidebarReducer } from "./sidebar/sidebarReducer";

export default createStore(
  combineReducers({
    sidebarState: sidebarReducer,
  }),
);
