import { Component } from "react";
import questions from "./../data";
import QuestionClass from "./components/QuestionClass";

export default class AppClass extends Component {
  render() {
    return (
      <div className="container">
        <h3>
          Q&A <b>(classes solution)</b>
        </h3>
        <section className="info">
          <ul>
            {questions.map((item) => {
              return (
                <li key={item.id}>
                  <QuestionClass title={item.title} info={item.info} />
                </li>
              );
            })}
          </ul>
        </section>
      </div>
    );
  }
}
