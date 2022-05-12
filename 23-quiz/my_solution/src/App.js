import React from "react";
import { useGlobalContext } from "./context";
import SetupForm from "./SetupForm";
import Loading from "./Loading";
import Modal from "./Modal";

function App() {
  const { waiting, loading, questions, index, correctAnswers } =
    useGlobalContext();

  if (waiting) {
    return <SetupForm />;
  }
  if (loading) {
    return <Loading />;
  }
  const { question, incorrect_answers, correct_answer } = questions[0];
  console.log(questions[0]);
  const answers = [...incorrect_answers, correct_answer];
  console.log("answers =", answers);
  return (
    <main>
      <Modal />
      <section className="quiz">
        <p className="correct-answers">
          correct answers: {correctAnswers} / {index}
        </p>
        <article className="container">
          <h3 dangerouslySetInnerHTML={{ __html: question }} />
          <div className="btn-container">
            {answers.map((item, index) => {
              return (
                <button
                  key={index}
                  dangerouslySetInnerHTML={{ __html: item }}
                  className="answer-btn"
                />
              );
            })}
          </div>
        </article>
        <button className="next-question">Next question</button>
      </section>
    </main>
  );
}

export default App;
