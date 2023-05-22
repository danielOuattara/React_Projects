import { Component } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import { ReviewsContext } from "./../context/ReviewsContext";

export default class Reviews extends Component {
  render() {
    return (
      <ReviewsContext.Consumer>
        {(context) => {
          return (
            <article className="review">
              <div className="img-container">
                <img
                  src={context.people[context.index].image}
                  alt={context.people[context.index].name}
                  className="person-img"
                />
                <span className="quote-icon">
                  {" "}
                  <FaQuoteRight />
                </span>
              </div>
              <h4 className="author">{context.people[context.index].name}</h4>
              <p className="job">{context.people[context.index].job}</p>
              <p className="info">{context.people[context.index].text}</p>
              <div className="button-container">
                <button className="prev-btn" onClick={context.getPreviousQuote}>
                  <FaChevronLeft />
                </button>
                <button className="next-btn" onClick={context.getNextQuote}>
                  <FaChevronRight />
                </button>
              </div>
              <div className="button-container">
                <button className="random-btn" onClick={context.getRandomQuote}>
                  surprise me
                </button>
              </div>
            </article>
          );
        }}
      </ReviewsContext.Consumer>
    );
  }
}
