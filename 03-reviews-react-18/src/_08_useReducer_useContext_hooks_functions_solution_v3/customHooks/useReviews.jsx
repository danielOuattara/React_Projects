import { useReducer } from "react";
import people from "./../../data";
import { reviewsReducer } from "./../reducer/reviews/reviewsReducer";
import {
  GET_PREVIOUS_QUOTE,
  GET_NEXT_QUOTE,
  GET_RANDOM_QUOTE,
} from "./../reducer/reviews/reviewsAction";

const initialReviewsState = {
  index: 0,
  people,
};

export default function useReviews() {
  const [reviewsState, dispatchReviews] = useReducer(
    reviewsReducer,
    initialReviewsState,
  );

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
    return dispatchReviews({
      type: GET_RANDOM_QUOTE,
      payload: reviewsState.index + 1,
    });
  };
  return {
    reviewsState,
    getPreviousQuote,
    getNextQuote,
    getRandomQuote,
  };
}
