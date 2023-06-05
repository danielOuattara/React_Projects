import { createContext, useState, useContext } from "react";
import data from "./../../data";

const QuestionAnswerContext = createContext();

export default function QuestionAnswerContextProvider(props) {
  const [questions] = useState(data);
  return (
    <QuestionAnswerContext.Provider value={{ questions }}>
      {props.children}
    </QuestionAnswerContext.Provider>
  );
}

export const useQuestionAnswerContext = () => useContext(QuestionAnswerContext);
