import React from "react";
import { useGlobalContext } from "./context";

const SetupForm = () => {
  const table = {
    any: "",
    "general knowledge": 9,
    books: 10,
    films: 11,
    music: 12,
    "science & nature": 17,
    computers: 18,
    mathematics: 19,
    sports: 21,
    history: 23,
    politics: 24,
    arts: 25,
    animal: 27,
  };

  const questionNumbers = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
  const questionsLevel = ["easy", "medium", "hard"];

  const API_ENDPOINT = "https://opentdb.com/api.php?";

  const { error, quiz, setQuiz, fetchQuestions } = useGlobalContext();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setQuiz((previousQuiz) => {
      return { ...previousQuiz, [name]: value };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { amount, category, difficulty } = quiz;
    const url = `${API_ENDPOINT}amount=${amount}&category=${category}&difficulty=${difficulty}`;
    fetchQuestions(url);
  };
  return (
    <main>
      <section className="quiz quiz-small">
        <form className="setup-form" onSubmit={handleSubmit}>
          <h3>Setup quiz</h3>

          <div className="form-control">
            <label htmlFor="amount">Number of questions</label>

            <select
              name="amount"
              id="amount"
              className="form-input"
              value={quiz.amount}
              onChange={handleChange}
            >
              {questionNumbers.map((number, index) => (
                <option key={index} value={number}>
                  {number}
                </option>
              ))}
            </select>
          </div>

          <div className="form-control">
            <label htmlFor="category">select category</label>
            <select
              name="category"
              id="category"
              className="form-input"
              value={quiz.category}
              onChange={handleChange}
            >
              {Object.entries(table).map((subArray, index) => {
                return (
                  <option key={index} value={subArray[1]}>
                    {subArray[0]}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="form-control">
            <label htmlFor="difficulty">select difficulty</label>
            <select
              name="difficulty"
              id="difficulty"
              className="form-input"
              value={quiz.difficulty}
              onChange={handleChange}
            >
              {questionsLevel.map((level, index) => (
                <option key={index} value={level}>
                  {level}
                </option>
              ))}
            </select>
          </div>

          <div className="form-control"></div>

          {error && (
            <p className="error">
              Can't generate questions, please try differents choices
            </p>
          )}

          <button type="submit" className="submit-btn">
            start
          </button>
        </form>
      </section>
    </main>
  );
};

export default SetupForm;
