import { QuestionAnswerContext } from "../context/QuestionAnswerContext";
import Question from "./QuestionFunction";

export default function Container() {
  return (
    <QuestionAnswerContext.Consumer>
      {(context) => {
        return (
          <div className="container">
            <h3>
              Q&A
              <b>(function contextAPI solution)</b>
            </h3>
            <section className="info">
              <ul>
                {context.questions.map((item) => {
                  return (
                    <li key={item.id}>
                      <Question {...item} />
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
