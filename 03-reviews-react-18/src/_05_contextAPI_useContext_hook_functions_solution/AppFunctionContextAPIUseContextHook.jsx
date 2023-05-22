import Container from "./components/Container";
import ReviewsContextProvider from "./context/ReviewsContext";

export default function AppFunctionContextAPIUseContextHook() {
  return (
    <ReviewsContextProvider>
      <Container />
    </ReviewsContextProvider>
  );
}
