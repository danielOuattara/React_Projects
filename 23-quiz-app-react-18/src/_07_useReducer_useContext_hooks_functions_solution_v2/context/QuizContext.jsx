import { useContext, createContext } from "react";
import { useFetchQuiz } from "../customHooks";
//-----------------------------------------------------------------

export const QuizContext = createContext();

export default function QuizContextProvider({ children }) {
  const { quizState, dispatchQuiz, fetchQuiz } = useFetchQuiz();

  return (
    <QuizContext.Provider value={{ ...quizState, dispatchQuiz, fetchQuiz }}>
      {children}
    </QuizContext.Provider>
  );
}

export const useQuizContext = () => {
  return useContext(QuizContext);
};
