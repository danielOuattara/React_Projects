import Reviews from "./components/Reviews";
import { useReducer } from "react";
import { reviewsReducer } from "./reducer/reviews/reviewsReducer";
import people from "./../data";

const initialReviewsState = {
  index: 0,
  people,
};

export default function AppFunctionUseReducerV1() {
  const [reviewsState, dispatchReviews] = useReducer(
    reviewsReducer,
    initialReviewsState,
  );

  return (
    <main>
      <section className="container">
        <div className="title">
          <h2> our reviews</h2>
          <p>useReducer hooks functions solution (version 1)</p>
          <div className="underline"></div>
        </div>
        <Reviews
          reviewsState={reviewsState}
          dispatchReviews={dispatchReviews}
        />
      </section>
    </main>
  );
}
