import { useQuizContext } from "../../context";
import {
  QuizQuestionsAmountSelect,
  QuizCategoriesSelect,
  QuizDifficultiesSelect,
} from "./../../components";

//-----------------------------------------------

export default function QuizSetupForm() {
  const { error, quizSetup, setQuizState, fetchQuestions } = useQuizContext();

  const API_ENDPOINT = "https://opentdb.com/api.php?";

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    return setQuizState((prevState) => ({
      ...prevState,
      quizSetup: {
        ...prevState.quizSetup,
        [name]: value,
      },
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const url = `${API_ENDPOINT}amount=${quizSetup.amount}&category=${quizSetup.category}&difficulty=${quizSetup.difficulty}`;
    fetchQuestions(url);
  };

  return (
    <main>
      <section className="quiz quiz-small">
        <form className="setup-form" onSubmit={handleSubmit}>
          <h3>Quiz Setup </h3>
          <QuizQuestionsAmountSelect handleChange={handleChange} />
          <QuizCategoriesSelect handleChange={handleChange} />
          <QuizDifficultiesSelect handleChange={handleChange} />

          {error && <p className="error">{error}</p>}

          <button type="submit" className="submit-btn">
            start playing
          </button>
        </form>
      </section>
    </main>
  );
}
