import { configureStore } from "@reduxjs/toolkit";
import toursReducer from "./tours/tours-slice";

const store = configureStore({
  reducer: {
    tours: toursReducer,
  },
});

export default store;
