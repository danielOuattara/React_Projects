import { useQuestionAnswerContext } from "../context/QuestionAnswerContext";
import Questions from "./Question";

export default function Container() {
  const { state } = useQuestionAnswerContext();
  return (
    <div className="container">
      <h3>
        Q&A
        <b>( useReducer + custom hooks + useContext functions solution )</b>
      </h3>
      <section className="info">
        <ul>
          {state.questions.map((item) => {
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
}
