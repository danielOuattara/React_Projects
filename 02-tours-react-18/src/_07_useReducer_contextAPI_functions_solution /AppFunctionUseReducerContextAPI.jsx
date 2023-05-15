import Container from "./components/Container";
import ToursContextProvider from "./context/ToursContext";

export default function AppFunctionUseReducerContextAPI() {
  return (
    <ToursContextProvider>
      <Container />
    </ToursContextProvider>
  );
}
