import { useReducer } from "react";
import people from "./../../data";
import { reviewsReducer } from "./../reducer/reviews/reviewsReducer";

const initialReviewsState = {
  index: 0,
  people,
};

export default function useReviews() {
  const [reviewsState, dispatchReviews] = useReducer(
    reviewsReducer,
    initialReviewsState,
  );

  return {
    reviewsState,
    dispatchReviews,
  };
}
