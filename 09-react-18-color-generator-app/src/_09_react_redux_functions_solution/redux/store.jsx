import { createStore, combineReducers } from "redux";
import { colorGeneratorReducer } from "./colorGenerator/colorGeneratorReducer";

export default createStore(
  combineReducers({
    colorGeneratorState: colorGeneratorReducer,
  }),
);
