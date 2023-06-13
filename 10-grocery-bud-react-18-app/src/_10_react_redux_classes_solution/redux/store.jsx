import { createStore, combineReducers } from "redux";
import { groceryReducer } from "./grocery/groceryReducer";

export default createStore(
  combineReducers({
    groceryState: groceryReducer,
  }),
);
