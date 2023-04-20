import { useState } from "react";
import axios from "axios";

export default function useFetchQuiz() {
  const [quizState, setQuizState] = useState({
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
  });

  const fetchQuestions = async (url) => {
    try {
      setQuizState((prevState) => ({
        ...prevState,
        isWaiting: false,
        isLoading: true,
      }));

      const response = await axios(url);

      const data = response.data.results;
      if (data.length > 0) {
        return setQuizState((prevState) => ({
          ...prevState,
          questions: data,
          isLoading: false,
          isWaiting: false,
          error: null,
        }));
      } else {
        return setQuizState((prevState) => ({
          ...prevState,
          questions: [],
          isLoading: false,
          error:
            "No data received, please try again different options for quiz setup",
          isWaiting: true,
        }));
      }
    } catch (error) {
      setQuizState((prevState) => ({
        ...prevState,
        error: `${error.message}`,
        isWaiting: true,
      }));
    }
  };
  return { quizState, setQuizState, fetchQuestions };
}
