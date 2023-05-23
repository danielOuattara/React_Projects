/* 
This version 1 : 

- data come from "useReviews"
- then data ( reviewsState, dispatchReviews) is sent to ReviewsContext
- the component that requires data takes them and built there al necessary methods

*/

import Container from "./components/Container";
import ReviewsContextProvider from "./context/ReviewsContext";

export default function AppFunctionContextAPI() {
  return (
    <ReviewsContextProvider>
      <Container />
    </ReviewsContextProvider>
  );
}
