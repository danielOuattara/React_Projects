/* 
This version 2 : 

- data come from "useReviews"
- then data ( reviewsState, dispatchReviews) is sent to ReviewsContext where all necessary methods are built
- the component that requires consume all props & methods from ReviewsContext 

*/

import Container from "./components/Container";
import ReviewsContextProvider from "./context/ReviewsContext";

export default function AppFunctionUseReducerUseContextV2() {
  return (
    <ReviewsContextProvider>
      <Container />
    </ReviewsContextProvider>
  );
}
