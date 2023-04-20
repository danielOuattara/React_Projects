import {
  HANDLE_ERROR,
  HANDLE_NEXT_QUESTION,
  HANDLE_PLAY_AGAIN,
  HANDLE_RESTART_GAME,
  HANDLE_USER_RESPONSE,
  NO_DATA_RECEIVED,
  SET_LOADING,
  SET_QUIZ_SETUP,
  SET_QUIZ_STATE,
} from "../actions/quizActions";

export default function quizReducer(state, action) {
  switch (action.type) {
    case SET_QUIZ_SETUP:
      return {
        ...state,
        quizSetup: {
          ...state.quizSetup,
          [action.payload.name]: action.payload.value,
        },
      };
    case SET_LOADING:
      return {
        ...state,
        isWaiting: false,
        isLoading: true,
      };

    case SET_QUIZ_STATE:
      return {
        ...state,
        questions: action.payload.data,
        isLoading: false,
        isWaiting: false,
        error: null,
      };

    case NO_DATA_RECEIVED:
      return {
        ...state,
        questions: [],
        isLoading: false,
        error:
          "No data received, please try again different options for quiz setup",
        isWaiting: true,
      };

    case HANDLE_ERROR:
      return { ...state, isWaiting: true, error: action.payload.errorMessage };

    case HANDLE_NEXT_QUESTION:
      let currentIndex = state.index;
      if (currentIndex >= state.questions.length - 1) {
        return {
          ...state,
          isModalOpen: true,
        };
      } else {
        return {
          ...state,
          index: state.index + 1,
        };
      }

    case HANDLE_USER_RESPONSE:
      if (action.payload.isCorrect) {
        return { ...state, userCorrectAnswers: state.userCorrectAnswers + 1 };
      }
      return state;

    case HANDLE_RESTART_GAME:
      return {
        ...state,
        isWaiting: true,
        userCorrectAnswers: 0,
        isModalOpen: false,
      };

    case HANDLE_PLAY_AGAIN:
      return {
        ...state,
        isWaiting: true,
        userCorrectAnswers: 0,
        isModalOpen: false,
        index: 0,
      };

    default:
      return state;
  }
}
