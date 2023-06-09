import { createStore, combineReducers } from "redux";
import { textGeneratorReducer } from "./textGenerator/textGeneratorReducer";

export default createStore(
  combineReducers({
    textGeneratorState: textGeneratorReducer,
  }),
);
