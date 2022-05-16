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
    setLoading,
    index,
    setIndex,
    questions,
    setQuestions,
    correctAnswers,
    setCorrectAnswers,
    error,
    setError,
    isModalOpen,
    setIsModalOpen,
  } = useGlobalContext();

  // TODO: create the possibility to randomize answers index in its array
  // const randomIndexes = (arr) => {
  //   const set = new Set();
  //   while (set.size < arr.length) {
  //     set.add(Math.floor(Math.random() * arr.length));
  //   }
  //   return set;
  // };


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

  const closeModal = () => {
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
  const answers = [...incorrect_answers, correct_answer];

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
          Next question
        </button>
      </section>
    </main>
  );
}

export default App;
