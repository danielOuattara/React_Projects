import { createSlice } from "@reduxjs/toolkit";
import people from "./../../../data";

const checkIndex = (argIndex) => {
  if (argIndex > people.length - 1) {
    return 0;
  } else if (argIndex < 0) {
    return people.length - 1;
  } else {
    return argIndex;
  }
};

const initialReviewsState = {
  index: 0,
  people,
};

const reviewsSlice = createSlice({
  name: "reviews",
  initialState: initialReviewsState,
  reducers: {
    getPreviousQuote: (state) => {
      state.index = checkIndex(state.index - 1);
    },
    getNextQuote: (state) => {
      state.index = checkIndex(state.index + 1);
    },
    getRandomQuote: (state) => {
      let randomIndex = Math.floor(Math.random() * people.length);
      if (randomIndex === state.index) {
        randomIndex = checkIndex(randomIndex - 1);
      }
      state.index = checkIndex(randomIndex);
    },
  },
});

const reviewsAction = reviewsSlice.actions;
const reviewsReducer = reviewsSlice.reducer;

export { reviewsAction, reviewsReducer };
