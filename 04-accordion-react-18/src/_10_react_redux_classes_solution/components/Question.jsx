import { Component } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { TOGGLE_SHOW_ANSWER } from "../redux/questionAnswer/questionsAction";
import { connect } from "react-redux";

//---------------------------------------------------------

class Question extends Component {
  render() {
    return (
      <article className="question">
        <header>
          <h4>{this.props.title}</h4>
          <button
            className="btn"
            onClick={() => this.props.toggleShowAnswer(this.props.id)}
          >
            {this.props.showAnswer ? <AiOutlineMinus /> : <AiOutlinePlus />}
          </button>
        </header>
        {this.props.showAnswer && <p>{this.props.info}</p>}
      </article>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleShowAnswer: (id) =>
      dispatch({ type: TOGGLE_SHOW_ANSWER, payload: id }),
  };
};

export default connect(null, mapDispatchToProps)(Question);
