import { useQuizContext } from "./../../context";
import { categoriesTable } from "./../../utilities/quiz.js";

export default function QuizCategoriesSelect(props) {
  const { quizSetup } = useQuizContext();
  return (
    <div className="form-control">
      <label htmlFor="category">select category</label>
      <select
        name="category"
        id="category"
        className="form-input"
        value={quizSetup.category}
        onChange={props.handleChange}
      >
        {Object.entries(categoriesTable).map((subArray, index) => (
          <option key={index} value={subArray[1]}>
            {subArray[0]}
          </option>
        ))}
      </select>
    </div>
  );
}
