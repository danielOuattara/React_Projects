import { createStore, combineReducers } from "redux";
import { sliderReducer } from "./slider/sliderReducer";

export default createStore(
  combineReducers({
    sliderState: sliderReducer,
  }),
);
