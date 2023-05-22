import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import {
  GET_PREVIOUS_QUOTE,
  GET_NEXT_QUOTE,
  GET_RANDOM_QUOTE,
} from "../reducer/reviews/reviewsAction";

export default function Reviews(props) {
  const { people, index } = props.reviewsState;
  // console.log(props);
  const { dispatchReviews } = props;

  const getPreviousQuote = () => {
    return dispatchReviews({
      type: GET_PREVIOUS_QUOTE,
    });
  };

  const getNextQuote = () => {
    return dispatchReviews({
      type: GET_NEXT_QUOTE,
    });
  };

  const getRandomQuote = () => {
    return props.dispatchReviews({
      type: GET_RANDOM_QUOTE,
      payload: props.reviewsState.index + 1,
    });
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
