import { createContext, useContext } from "react";
import useReviews from "../customHooks/useReviews";

export const ReviewsContext = createContext();

export default function ReviewsContextProvider(props) {
  const { reviewsState, dispatchReviews } = useReviews();

  return (
    <ReviewsContext.Provider value={{ reviewsState, dispatchReviews }}>
      {props.children}
    </ReviewsContext.Provider>
  );
}

export const useReviewsContext = () => {
  return useContext(ReviewsContext);
};
