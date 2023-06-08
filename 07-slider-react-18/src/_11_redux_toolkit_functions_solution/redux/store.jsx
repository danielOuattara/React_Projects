import { configureStore } from "@reduxjs/toolkit";
import sliderReducer from "./slider/slider-slice";

export default configureStore({
  reducer: {
    sliderState: sliderReducer,
  },
});
