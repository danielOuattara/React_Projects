import { createContext, useState } from "react";
import data from "./../../data";

export const QuestionAnswerContext = createContext();

export default function QuestionAnswerContextProvider(props) {
  const [questions] = useState(data);
  return (
    <QuestionAnswerContext.Provider value={{ questions }}>
      {props.children}
    </QuestionAnswerContext.Provider>
  );
}
