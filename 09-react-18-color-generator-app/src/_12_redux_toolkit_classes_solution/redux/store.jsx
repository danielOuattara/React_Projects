import { configureStore } from "@reduxjs/toolkit";
import colorGeneratorReducer from "./colorGenerator/colorGenerator-slice";

export default configureStore({
  reducer: {
    colorGeneratorState: colorGeneratorReducer,
  },
});
