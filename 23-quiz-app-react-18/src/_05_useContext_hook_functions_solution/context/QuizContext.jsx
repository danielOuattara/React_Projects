import { useContext, createContext, useState, useEffect } from "react";
import axios from "axios";

const url = "";
const API_ENDPOINT = "https://opentdb.com/api.php?";

const table = {
  sports: 21,
  history: 23,
  politics: 24,
};

const QuizContext = createContext();

export default function QuizContextProvider({ children }) {
  return <QuizContext.Provider value={{}}>{children}</QuizContext.Provider>;
}

export const useQuizContext = () => {
  return useContext(QuizContext);
};
