import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useQuestionAnswerContext } from "../context/QuestionAnswerContext";

export default function Question(props) {
  const { toggleShowAnswer } = useQuestionAnswerContext();
  return (
    <article className="question">
      <header>
        <h4>{props.title}</h4>
        <button className="btn" onClick={() => toggleShowAnswer(props.id)}>
          {props.showAnswer ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {props.showAnswer && <p>{props.info}</p>}
    </article>
  );
}
