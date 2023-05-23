import { createContext, useContext } from "react";
import useReviews from "../customHooks/useReviews";

import {
  GET_PREVIOUS_QUOTE,
  GET_NEXT_QUOTE,
  GET_RANDOM_QUOTE,
} from "./../reducer/reviews/reviewsAction";

export const ReviewsContext = createContext();

export default function ReviewsContextProvider(props) {
  const { reviewsState, dispatchReviews } = useReviews();
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

  return (
    <ReviewsContext.Provider
      value={{ reviewsState, getPreviousQuote, getNextQuote, getRandomQuote }}
    >
      {props.children}
    </ReviewsContext.Provider>
  );
}

export const useReviewsContext = () => {
  return useContext(ReviewsContext);
};
