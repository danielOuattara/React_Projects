import React from "react";
import { useGlobalContext } from "./context";
import SetupForm from "./SetupForm";
import Loading from "./Loading";
import Modal from "./Modal";

function App() {
  const {
    waiting,
    loading,
    questions,
    index,
    correctAnswers,
    setQuestions,
    setIndex,
  } = useGlobalContext();

  const setNextQuestion = () => {
    setIndex((previousIndex) => {
      if (previousIndex + 1 > questions.length - 1) {
        //opendModal()
        return 0;
      } else {
        return previousIndex + 1;
      }
    });
  };

  if (waiting) {
    return <SetupForm />;
  }
  if (loading) {
    return <Loading />;
  }
  const { question, incorrect_answers, correct_answer } = questions[index];
  const answers = [...incorrect_answers, correct_answer];

  // TODO: create the possibility to randomize answers index in its array
  // const randomIndexes = (arr) => {
  //   const set = new Set();
  //   while (set.size < arr.length) {
  //     set.add(Math.floor(Math.random() * arr.length));
  //   }
  //   return set;
  // };

  // console.log(randomIndexes(answers))

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
        <button className="next-question" onClick={setNextQuestion}>
          Next question
        </button>
      </section>
    </main>
  );
}

export default App;
