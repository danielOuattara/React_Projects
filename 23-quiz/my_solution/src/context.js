import axios from "axios";
import React, { useState, useContext, useEffect } from "react";

const table = {
  sports: 21,
  history: 23,
  politics: 24,
};

const API_ENDPOINT = "https://opentdb.com/api.php?";
const temp_url =
  "https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple";

const url = "";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [waiting, setWaiting] = useState(true);
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [error, setError] = useState(false);
  const [isModalOPen, setIsModalOPen] = useState(false);

  return (
    <AppContext.Provider
      value={{
        waiting,
        loading,
        questions,
        index,
        correctAnswers,
        error,
        isModalOPen,
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
