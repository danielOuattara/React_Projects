import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import { connect } from "react-redux";
import {
  GET_PREVIOUS_QUOTE,
  GET_NEXT_QUOTE,
  GET_RANDOM_QUOTE,
} from "./../redux/reviews/reviewsAction";

function Reviews(props) {
  const { people, index } = props.reviews;

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
        <button className="prev-btn" onClick={props.getPreviousQuote}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={props.getNextQuote}>
          <FaChevronRight />
        </button>
      </div>
      <div className="button-container">
        <button className="random-btn" onClick={props.getRandomQuote}>
          surprise me
        </button>
      </div>
    </article>
  );
}

const mapStateToProps = (state) => {
  return {
    reviews: state.reviews,
  };
};

const masDispatchToProps = (dispatch) => {
  return {
    getPreviousQuote: () => {
      return dispatch({
        type: GET_PREVIOUS_QUOTE,
      });
    },

    getNextQuote: () => {
      return dispatch({
        type: GET_NEXT_QUOTE,
      });
    },

    getRandomQuote: () => {
      return dispatch({
        type: GET_RANDOM_QUOTE,
      });
    },
  };
};

export default connect(mapStateToProps, masDispatchToProps)(Reviews);
