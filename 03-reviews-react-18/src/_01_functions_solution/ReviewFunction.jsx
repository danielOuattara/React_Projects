import { useState } from "react";
import people from "./../data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

export default function Review() {
  const [index, setIndex] = useState(0);

  const checkIndex = (argIndex) => {
    if (argIndex > people.length - 1) {
      return 0;
    } else if (argIndex < 0) {
      return people.length - 1;
    } else {
      return argIndex;
    }
  };

  const getPreviousQuote = () => {
    return setIndex((index) => checkIndex(index - 1));
  };

  const getNextQuote = () => {
    return setIndex((index) => checkIndex(index + 1));
  };

  const getRandomQuote = () => {
    let randomIndex = Math.floor(Math.random() * people.length);
    if (randomIndex === index) {
      randomIndex = checkIndex(randomIndex - 1);
    }
    return setIndex(() => randomIndex);
  };

  return (
    <article className="review">
      <div className="img-container">
        <img
          src={people[index].image}
          alt={people[index].name}
          className="person-img"
        />
        <span className="quote-icon">
          {" "}
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{people[index].name}</h4>
      <p className="job">{people[index].job}</p>
      <p className="info">{people[index].text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={getPreviousQuote}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={getNextQuote}>
          <FaChevronRight />
        </button>
      </div>
      <div className="button-container">
        <button className="random-btn" onClick={getRandomQuote}>
          surprise me
        </button>
      </div>
    </article>
  );
}
