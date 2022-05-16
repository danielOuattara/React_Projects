import axios from "axios";
import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [waiting, setWaiting] = useState(true);
  const [loading, setLoading] = useState(false);
  const [index, setIndex] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [error, setError] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [quiz, setQuiz] = useState({
    amount: 5,
    category: "", // starts with any
    difficulty: "easy",
  });

  const fetchQuestions = async (url) => {
    setLoading(true);
    setWaiting(false);
    const response = await axios(url).catch((error) => console.log(error));

    if (response) {
      const data = response.data.results;
      if (data.length > 0) {
        setQuestions(data);
        setLoading(false);
        setWaiting(false);
        setError(false);
      } else {
        setWaiting(true);
        setError(true);
      }
    } else {
      setWaiting(true);
      setError(error.message);
    }
  };

  return (
    <AppContext.Provider
      value={{
        waiting,
        setWaiting,
        loading,
        setLoading,
        index,
        setIndex,
        questions,
        setQuestions,
        correctAnswers,
        setCorrectAnswers,
        error,
        setError,
        isModalOpen,
        setIsModalOpen,
        quiz,
        setQuiz,
        fetchQuestions,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
