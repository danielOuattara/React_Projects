import { useQuizContext } from "./../../context";
import { questionsLevel } from "./../../utilities/quiz.js";

export default function QuizDifficultiesSelect(props) {
  const { quizSetup } = useQuizContext();
  return (
    <div className="form-control">
      <label htmlFor="difficulty">select Level</label>
      <select
        name="difficulty"
        id="difficulty"
        className="form-input"
        value={quizSetup.difficulty}
        onChange={props.handleChange}
      >
        {questionsLevel.map((number, index) => (
          <option key={index} value={number}>
            {number}
          </option>
        ))}
      </select>
    </div>
  );
}
