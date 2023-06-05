import { Component } from "react";
import QuestionAnswerContextProvider from "./context/QuestionAnswerContext";
import Container from "./components/Container";

export default class AppClass extends Component {
  render() {
    return (
      <QuestionAnswerContextProvider>
        <Container />
      </QuestionAnswerContextProvider>
    );
  }
}
