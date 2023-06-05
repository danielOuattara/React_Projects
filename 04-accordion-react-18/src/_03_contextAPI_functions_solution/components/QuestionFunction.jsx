import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Question = (props) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const toggleShowAnswer = () => setShowAnswer(() => !showAnswer);

  return (
    <article className="question">
      <header>
        <h4>{props.title}</h4>
        <button className="btn" onClick={toggleShowAnswer}>
          {showAnswer ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {showAnswer && <p>{props.info}</p>}
    </article>
  );
};

export default Question;
