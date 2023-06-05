import data from "./../data";
import { useReducer } from "react";
import questionsReducer from "./reducer/questionsAnswer/questionsReducer";
import {
  TOGGLE_SHOW_ANSWER,
  // UPDATE_QUESTIONS,
} from "./reducer/questionsAnswer/questionsAction";
import Question from "./components/Questions";

const questionInitialState = {
  questions: data,
};

export default function AppFunctionUseReducer() {
  const [state, dispatch] = useReducer(questionsReducer, questionInitialState);

  const toggleShowAnswer = (id) => {
    return dispatch({ type: TOGGLE_SHOW_ANSWER, payload: id });
  };
  return (
    <div className="container">
      <h3>
        Q&A <b>(useReducer solution)</b>
      </h3>
      <section className="info">
        <ul>
          {state.questions.map((item) => {
            return (
              <li key={item.id}>
                <Question {...item} toggleShowAnswer={toggleShowAnswer} />
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
