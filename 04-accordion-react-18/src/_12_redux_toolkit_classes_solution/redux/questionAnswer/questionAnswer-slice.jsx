import { createSlice } from "@reduxjs/toolkit";
import data from "./../../../data";

const questions = [...data];

const questionInitialState = {
  questions,
};

const questionAnswerSlice = createSlice({
  name: "questionAnswer",
  initialState: questionInitialState,
  reducers: {
    toggleShowAnswer(state, action) {
      let answerToToggle = state.questions.find(
        (item) => item.id === action.payload.id,
      );
      if (!answerToToggle) return state; // security

      const newQuestions = [...state.questions];
      const answerToToggleIndex = newQuestions.findIndex(
        (item) => item.id === action.payload.id,
      );

      answerToToggle = {
        ...answerToToggle,
        showAnswer: !answerToToggle.showAnswer,
      };

      newQuestions[answerToToggleIndex] = answerToToggle;

      state.questions = newQuestions;
    },
  },
});

export const questionAnswerActions = questionAnswerSlice.actions;
export default questionAnswerSlice.reducer;
