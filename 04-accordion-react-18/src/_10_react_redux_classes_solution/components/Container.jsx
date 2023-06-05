import { Component } from "react";
import { connect } from "react-redux";
import Questions from "./Question";

//---------------------------------------------------------

class Container extends Component {
  render() {
    return (
      <div className="container">
        <h3>
          Q&A
          <b>( redux + classes solution )</b>
        </h3>
        <section className="info">
          <ul>
            {this.props.questions.map((item) => {
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
}

const mapStateToProps = (state) => {
  return {
    questions: state.questionsState.questions,
  };
};

export default connect(mapStateToProps, null)(Container);
