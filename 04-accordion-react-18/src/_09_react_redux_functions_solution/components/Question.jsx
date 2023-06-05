import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { TOGGLE_SHOW_ANSWER } from "../redux/questionAnswer/questionsAction";
import { connect } from "react-redux";

//---------------------------------------------------------

function Question(props) {
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

const mapDispatchToProps = (dispatch) => {
  return {
    toggleShowAnswer: (id) =>
      dispatch({ type: TOGGLE_SHOW_ANSWER, payload: id }),
  };
};

export default connect(null, mapDispatchToProps)(Question);
