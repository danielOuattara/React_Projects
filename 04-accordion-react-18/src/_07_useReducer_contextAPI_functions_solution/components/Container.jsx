import { QuestionAnswerContext } from "../context/QuestionAnswerContext";
import Questions from "./Question";

export default function Container() {
  return (
    <QuestionAnswerContext.Consumer>
      {(context) => {
        return (
          <div className="container">
            <h3>
              Q&A
              <b>
                (useReducer + custom hooks + context API functions solution)
              </b>
            </h3>
            <section className="info">
              <ul>
                {context.state.questions.map((item) => {
                  return (
                    <li key={item.id}>
                      <Questions {...item} />
                    </li>
                  );
                })}
              </ul>
            </section>
          </div>
        );
      }}
    </QuestionAnswerContext.Consumer>
  );
}
