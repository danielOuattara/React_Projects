import { createStore, combineReducers } from "redux";
import { navbarReducer } from "./navbar/navbarReducer";

export default createStore(
  combineReducers({
    navbarState: navbarReducer,
  }),
);
