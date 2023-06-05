import { createStore, combineReducers } from "redux";
import questionsReducer from "./questionAnswer/questionsReducer";

export default createStore(
  combineReducers({
    questionsState: questionsReducer,
  }),
);
