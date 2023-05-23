import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { reviewsActions } from "../store/reviews/reviews-slice";

export default function Reviews() {
  const dispatch = useDispatch();
  const { index, people } = useSelector((state) => state.reviews);
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
        <button
          className="prev-btn"
          onClick={() => dispatch(reviewsActions.getPreviousQuote())}
        >
          <FaChevronLeft />
        </button>
        <button
          className="next-btn"
          onClick={() => dispatch(reviewsActions.getNextQuote())}
        >
          <FaChevronRight />
        </button>
      </div>
      <div className="button-container">
        <button
          className="random-btn"
          onClick={() => dispatch(reviewsActions.getRandomQuote())}
        >
          surprise me
        </button>
      </div>
    </article>
  );
}
