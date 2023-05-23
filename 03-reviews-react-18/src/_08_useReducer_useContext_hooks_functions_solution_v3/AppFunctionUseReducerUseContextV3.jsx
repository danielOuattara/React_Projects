/* 
This version 3 : 

- all data and method come from "useReviews" custom hook
- then data is sent to ReviewsContext
- the component that requires consume all props & methods from ReviewsContext 

*/

import Container from "./components/Container";
import ReviewsContextProvider from "./context/ReviewsContext";

export default function AppFunctionUseReducerUseContextV3() {
  return (
    <ReviewsContextProvider>
      <Container />
    </ReviewsContextProvider>
  );
}
