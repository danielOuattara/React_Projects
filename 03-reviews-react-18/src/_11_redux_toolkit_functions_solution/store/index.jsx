import { configureStore } from "@reduxjs/toolkit";
import reviewsReducer from "./reviews/reviews-slice";

const store = configureStore({
  reducer: {
    reviews: reviewsReducer,
  },
});

export default store;
