import { useQuestionAnswerContext } from "../context/QuestionAnswerContext";
import Question from "./QuestionFunction";

export default function Container() {
  const { questions } = useQuestionAnswerContext();
  return (
    <div className="container">
      <h3>
        Q&A
        <b>(contextAPI + useContext solution)</b>
      </h3>
      <section className="info">
        <ul>
          {questions.map((item) => {
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
}
