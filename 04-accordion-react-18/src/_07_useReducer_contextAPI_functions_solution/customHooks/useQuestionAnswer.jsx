/*

import { useReducer, useEffect } from "react";
import data from "./../../data";
import questionsReducer from "./../reducer/questionsAnswer/questionsReducer";
import {
  TOGGLE_SHOW_ANSWER,
  UPDATE_QUESTIONS,
} from "./../reducer/questionsAnswer/questionsAction";

//-----------------------------------------------------------

const questionInitialState = {
  questions: data,
};

export default function useQuestionAnswer() {
  const [state, dispatch] = useReducer(questionsReducer, questionInitialState);

  useEffect(() => {
    dispatch({ type: UPDATE_QUESTIONS });
  }, []);

  const toggleShowAnswer = (id) => {
    return dispatch({ type: TOGGLE_SHOW_ANSWER, payload: id });
  };
  return { state, toggleShowAnswer };
}

*/
