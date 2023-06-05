import { createContext, useReducer } from "react";
import data from "./../../data";
import questionsReducer from "./../reducer/questionsAnswer/questionsReducer";
import { TOGGLE_SHOW_ANSWER } from "./../reducer/questionsAnswer/questionsAction";

//--------------------------------------------------------------------------

export const QuestionAnswerContext = createContext();

const questionInitialState = {
  questions: data,
};

export default function QuestionAnswerContextProvider(props) {
  const [state, dispatch] = useReducer(questionsReducer, questionInitialState);

  const toggleShowAnswer = (id) => {
    return dispatch({ type: TOGGLE_SHOW_ANSWER, payload: id });
  };
  return (
    <QuestionAnswerContext.Provider value={{ state, toggleShowAnswer }}>
      {props.children}
    </QuestionAnswerContext.Provider>
  );
}
