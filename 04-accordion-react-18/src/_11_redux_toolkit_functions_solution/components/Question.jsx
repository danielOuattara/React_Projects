import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { questionAnswerActions } from "./../redux/questionAnswer/questionAnswer-slice";
import { useDispatch } from "react-redux";
//---------------------------------------------------------

export default function Question(props) {
  const dispatch = useDispatch();

  return (
    <article className="question">
      <header>
        <h4>{props.title}</h4>
        <button
          className="btn"
          onClick={() =>
            dispatch(questionAnswerActions.toggleShowAnswer({ id: props.id }))
          }
        >
          {props.showAnswer ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {props.showAnswer && <p>{props.info}</p>}
    </article>
  );
}
