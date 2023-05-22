import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

export default function Reviews(props) {
  const { getPreviousQuote, getNextQuote, getRandomQuote, index, people } =
    props;

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
