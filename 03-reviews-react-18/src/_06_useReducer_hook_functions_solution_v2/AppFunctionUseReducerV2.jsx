/* 
Version 2: data and methods are build here then send by props to consuming components 
 */

import Reviews from "./components/Reviews";
import { useReducer } from "react";
import { reviewsReducer } from "./reducer/reviews/reviewsReducer";
import people from "./../data";
import {
  GET_PREVIOUS_QUOTE,
  GET_NEXT_QUOTE,
  GET_RANDOM_QUOTE,
} from "./reducer/reviews/reviewsAction";

const initialReviewsState = {
  index: 0,
  people,
};

export default function AppFunctionUseReducerV2() {
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

  return (
    <main>
      <section className="container">
        <div className="title">
          <h2> our reviews</h2>
          <p>useReducer hooks functions solution (version 1)</p>
          <div className="underline"></div>
        </div>
        <Reviews
          getPreviousQuote={getPreviousQuote}
          getNextQuote={getNextQuote}
          getRandomQuote={getRandomQuote}
          index={reviewsState.index}
          people={reviewsState.people}
        />
      </section>
    </main>
  );
}
