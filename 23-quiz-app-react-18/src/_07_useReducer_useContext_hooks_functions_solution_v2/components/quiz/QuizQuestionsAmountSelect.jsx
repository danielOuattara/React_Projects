import { useQuizContext } from "./../../context";
import { questionsAmount } from "./../../utilities/quiz.js";

export default function QuizQuestionsAmountSelect(props) {
  const { quizSetup } = useQuizContext();
  return (
    <div className="form-control">
      <label htmlFor="amount">number of questions</label>
      <select
        name="amount"
        id="amount"
        className="form-input"
        value={quizSetup.amount}
        onChange={props.handleChange}
      >
        {questionsAmount.map((number, index) => (
          <option key={index} value={number}>
            {number}
          </option>
        ))}
      </select>
    </div>
  );
}
