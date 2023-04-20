import { useContext, createContext } from "react";
import { useFetchQuiz } from "./../customHooks";

const QuizContext = createContext();

export default function QuizContextProvider({ children }) {
  const { quizState, setQuizState, fetchQuestions } = useFetchQuiz();

  return (
    <QuizContext.Provider
      value={{ ...quizState, setQuizState, fetchQuestions }}
    >
      {children}
    </QuizContext.Provider>
  );
}

export const useQuizContext = () => {
  return useContext(QuizContext);
};
