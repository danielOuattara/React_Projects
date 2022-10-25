import React from "react";
import questions from "./../data";
import QuestionFunction from "./QuestionFunction";

function App() {
  return (
    <div className="container">
      <h3>question and answer about login (function components )</h3>
      <section className="info">
        <ul>
          {questions.map((item) => {
            const { id, title, info } = item;
            return (
              <li key={id}>
                <QuestionFunction title={title} info={info} />
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}

export default App;
