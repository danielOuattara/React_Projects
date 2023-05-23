import { createContext } from "react";
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

/*
version 2 of this ReviewsContextProvider: 
   --> send only "index", "setIndex", people to consuming components,
       so they build required by themselves (better for performances)
   
*/
