import { configureStore } from "@reduxjs/toolkit";
import textGeneratorReducer from "./textGenerator/textGenerator-slice";

export default configureStore({
  reducer: {
    textGeneratorState: textGeneratorReducer,
  },
});
