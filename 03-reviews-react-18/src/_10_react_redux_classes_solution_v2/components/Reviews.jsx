import { Component } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import { connect } from "react-redux";
import {
  getPreviousQuote,
  getNextQuote,
  getRandomQuote,
} from "./../redux/reviews/reviewsAction";

class Reviews extends Component {
  render() {
    const { people, index } = this.props.reviews;
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
          <button className="prev-btn" onClick={this.props.handlePreviousQuote}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={this.props.handleNextQuote}>
            <FaChevronRight />
          </button>
        </div>
        <div className="button-container">
          <button className="random-btn" onClick={this.props.handleRandomQuote}>
            surprise me
          </button>
        </div>
      </article>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    reviews: state.reviews,
  };
};

const masDispatchToProps = (dispatch) => {
  return {
    handlePreviousQuote: () => {
      return dispatch(getPreviousQuote());
    },

    handleNextQuote: () => {
      return dispatch(getNextQuote());
    },

    handleRandomQuote: () => {
      return dispatch(getRandomQuote());
    },
  };
};

export default connect(mapStateToProps, masDispatchToProps)(Reviews);
