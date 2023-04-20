import { useContext, createContext, useReducer } from "react";
import { quizReducer } from "../reducer";
import {
  SET_LOADING,
  SET_QUIZ_STATE,
  NO_DATA_RECEIVED,
  HANDLE_ERROR,
} from "./../actions/quizActions";
import axios from "axios";
//-----------------------------------------------------------------

export const QuizContext = createContext();

const initialQuizState = {
  isWaiting: true,
  isLoading: false,
  index: 0,
  questions: [],
  userCorrectAnswers: 0,
  error: null,
  isModalOpen: false,
  quizSetup: {
    amount: 5,
    category: "",
    difficulty: "easy",
  },
};

export default function QuizContextProvider({ children }) {
  const [quizState, dispatchQuiz] = useReducer(quizReducer, initialQuizState);

  //---------------

  const fetchQuiz = async (url) => {
    try {
      dispatchQuiz({ type: SET_LOADING });

      const response = await axios(url);

      const data = response.data.results;
      if (data.length > 0) {
        dispatchQuiz({
          type: SET_QUIZ_STATE,
          payload: { data },
        });
      } else {
        dispatchQuiz({
          type: NO_DATA_RECEIVED,
        });
      }
    } catch (error) {
      dispatchQuiz({
        type: HANDLE_ERROR,
        payload: { errorMessage: error.message },
      });
    }
  };

  //---------------

  return (
    <QuizContext.Provider value={{ ...quizState, dispatchQuiz, fetchQuiz }}>
      {children}
    </QuizContext.Provider>
  );
}

export const useQuizContext = () => {
  return useContext(QuizContext);
};
