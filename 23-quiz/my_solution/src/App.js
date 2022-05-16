import React from "react";
import { useGlobalContext } from "./context";
import SetupForm from "./SetupForm";
import Loading from "./Loading";
import Modal from "./Modal";

function App() {
  const {
    waiting,
    setWaiting,
    loading,
    index,
    setIndex,
    questions,
    correctAnswers,
    setCorrectAnswers,
    setIsModalOpen,
  } = useGlobalContext();

  const setNextQuestion = () => {
    setIndex((previousIndex) => {
      if (previousIndex + 1 > questions.length - 1) {
        setIsModalOpen(true);
        return 0;
      } else {
        return previousIndex + 1;
      }
    });
  };

  const checkAnswer = (value) => {
    if (value) {
      setCorrectAnswers((previousState) => previousState + 1);
    }
    setNextQuestion();
  };

  // const closeModal = () => {
  //   setWaiting(true);
  //   setCorrectAnswers(0);
  //   setIsModalOpen(false);
  // };

  const restart = () => {
    setWaiting(true);
    setCorrectAnswers(0);
    setIsModalOpen(false);
  };

  // -------------------------------------------- rendering

  if (waiting) {
    return <SetupForm />;
  }
  if (loading) {
    return <Loading />;
  }

  const { question, incorrect_answers, correct_answer } = questions[index];
  const answers = [...incorrect_answers];

  // I generate a random num between 0 and incorrect_answers.length + 1
  // This a create a random new "slot" index for my correct answer 
  let correctAnswerRandomIndex = Math.floor(
    Math.random() * (incorrect_answers.length + 1)
  );

  // then I insert the correct answer in the new randomly created index.
  answers.splice(correctAnswerRandomIndex, 0, correct_answer);

  return (
    <main>
      <Modal />
      <section className="quiz">
        <p className="correct-answers">
          correct answers: {correctAnswers} / {questions.length}
        </p>
        <article className="container">
          <h3 dangerouslySetInnerHTML={{ __html: question }} />
          <div className="btn-container">
            {answers.map((answer, index) => {
              return (
                <button
                  key={index}
                  dangerouslySetInnerHTML={{ __html: answer }}
                  className="answer-btn"
                  onClick={() => checkAnswer(correct_answer === answer)}
                />
              );
            })}
          </div>
        </article>

        <button className="next-question" onClick={setNextQuestion}>
          Restart
        </button>
        <button className="restart" onClick={restart}>
          Resart game
        </button>
      </section>
    </main>
  );
}

export default App;
