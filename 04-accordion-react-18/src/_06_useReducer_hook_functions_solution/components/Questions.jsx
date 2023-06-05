import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

export default function Question(props) {
  return (
    <article className="question">
      <header>
        <h4>{props.title}</h4>
        <button
          className="btn"
          onClick={() => props.toggleShowAnswer(props.id)}
        >
          {props.showAnswer ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {props.showAnswer && <p>{props.info}</p>}
    </article>
  );
}
