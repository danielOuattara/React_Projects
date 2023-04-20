import { useQuizContext } from "../../context";
import { decode } from "html-entities";
import {
  HANDLE_NEXT_QUESTION,
  HANDLE_RESTART_GAME,
  HANDLE_USER_RESPONSE,
} from "./../../actions/quizActions";

export default function Quiz() {
  const { questions, index, userCorrectAnswers, dispatchQuiz } =
    useQuizContext();

  const { question, incorrect_answers, correct_answer } = questions[index];
  const answersList = [...incorrect_answers];

  // I generate a random num between 0 and incorrect_answers.length + 1
  // This creates a random new "slot" index for placing the correct answer
  let correctAnswerRandomIndex = Math.floor(
    Math.random() * (incorrect_answers.length + 1),
  );

  // then I insert the correct answer in the new randomly created index.
  answersList.splice(correctAnswerRandomIndex, 0, correct_answer);

  const showNextQuestion = () => {
    dispatchQuiz({ type: HANDLE_NEXT_QUESTION });
  };

  const handleUserAnswer = (isCorrect) => {
    dispatchQuiz({ type: HANDLE_USER_RESPONSE, payload: { isCorrect } });

    showNextQuestion();
  };

  const restartGame = () => {
    dispatchQuiz({ type: HANDLE_RESTART_GAME });
  };

  return (
    <section className="quiz">
      <p className="correct-answers">
        correct answers: {userCorrectAnswers} / {questions.length}
      </p>
      <p className="">
        question: {index + 1} of {questions.length}
      </p>
      <article className="container">
        <h3>{decode(question, { level: "html5" })}</h3>
        <div className="btn-container">
          {answersList.map((answer, index) => (
            <button
              key={index}
              className="answer-btn"
              onClick={() => handleUserAnswer(answer === correct_answer)}
            >
              {decode(answer, { level: "html5" })}
            </button>
          ))}
        </div>
      </article>

      <button className="next-question" onClick={showNextQuestion}>
        next question &gt; &gt;
      </button>
      <button className="remove-btn" onClick={restartGame}>
        restart game
      </button>
    </section>
  );
}
