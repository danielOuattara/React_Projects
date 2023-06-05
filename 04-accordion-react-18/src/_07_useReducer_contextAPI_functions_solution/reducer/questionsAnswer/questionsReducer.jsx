import { TOGGLE_SHOW_ANSWER } from "./questionsAction";

export default function questionsReducer(state, action) {
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
