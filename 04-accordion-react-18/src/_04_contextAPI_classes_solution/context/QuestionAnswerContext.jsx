import React, { Component, createContext } from "react";
import data from "./../../data";

export const QuestionAnswerContext = createContext();

export default class QuestionAnswerContextProvider extends Component {
  state = { questions: data };
  render() {
    return (
      <QuestionAnswerContext.Provider
        value={{ questions: this.state.questions }}
      >
        {this.props.children}
      </QuestionAnswerContext.Provider>
    );
  }
}
