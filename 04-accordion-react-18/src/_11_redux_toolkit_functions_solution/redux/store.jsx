import { configureStore } from "@reduxjs/toolkit";
import questionAnswerReducer from "./questionAnswer/questionAnswer-slice";

const store = configureStore({
  reducer: {
    questionAnswer: questionAnswerReducer,
  },
});

export default store;
