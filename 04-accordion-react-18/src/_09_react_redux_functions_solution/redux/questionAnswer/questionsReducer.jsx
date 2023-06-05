import { TOGGLE_SHOW_ANSWER /* UPDATE_QUESTIONS */ } from "./questionsAction";
import data from "./data";

const questions = [...data];

const questionInitialState = {
  questions,
};

export default function questionsReducer(state = questionInitialState, action) {
  switch (action.type) {
    //-----------------------
    case TOGGLE_SHOW_ANSWER:
      const answerToToggleIndex = state.questions.findIndex(
        (item) => item.id === action.payload,
      );
      if (answerToToggleIndex === -1) return state;

      const newQuestions = [...state.questions];

      let answerToToggle = state.questions.find(
        (item) => item.id === action.payload,
      );

      answerToToggle = {
        ...answerToToggle,
        showAnswer: !answerToToggle.showAnswer,
      };

      newQuestions[answerToToggleIndex] = answerToToggle;

      return {
        ...state,
        questions: newQuestions,
      };

    default:
      return state;
  }
}
