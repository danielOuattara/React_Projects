import { Component } from "react";
import { QuestionAnswerContext } from "../context/QuestionAnswerContext";
import Question from "./QuestionClass";

export default class Container extends Component {
  render() {
    return (
      <QuestionAnswerContext.Consumer>
        {(context) => {
          return (
            <div className="container">
              <h3>
                Q&A
                <b>(classes contextAPI solution)</b>
              </h3>
              <section className="info">
                <ul>
                  {context.questions.map((item) => {
                    return (
                      <li key={item.id}>
                        <Question {...item} />
                      </li>
                    );
                  })}
                </ul>
              </section>
            </div>
          );
        }}
      </QuestionAnswerContext.Consumer>
    );
  }
}
