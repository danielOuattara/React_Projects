import Container from "./components/Container";
import ToursContextProvider from "./context/ToursContext";

export default function AppFunctionUseReducerUseContext() {
  return (
    <ToursContextProvider>
      <Container />
    </ToursContextProvider>
  );
}
