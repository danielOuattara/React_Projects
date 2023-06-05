import React, { Component } from "react";
import Questions from "./Question";
import { connect } from "react-redux";
//---------------------------------------------------------

class Container extends Component {
  render() {
    return (
      <div className="container">
        <h3>
          Q&A
          <b>( redux toolkit + classes solution)</b>
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
    questions: state.questionAnswer.questions,
  };
};

export default connect(mapStateToProps, null)(Container);
