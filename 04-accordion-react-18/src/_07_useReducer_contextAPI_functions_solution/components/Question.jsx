import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { QuestionAnswerContext } from "../context/QuestionAnswerContext";

export default function Question(props) {
  return (
    <QuestionAnswerContext.Consumer>
      {(context) => {
        return (
          <article className="question">
            <header>
              <h4>{props.title}</h4>
              <button
                className="btn"
                onClick={() => context.toggleShowAnswer(props.id)}
              >
                {props.showAnswer ? <AiOutlineMinus /> : <AiOutlinePlus />}
              </button>
            </header>
            {props.showAnswer && <p>{props.info}</p>}
          </article>
        );
      }}
    </QuestionAnswerContext.Consumer>
  );
}
