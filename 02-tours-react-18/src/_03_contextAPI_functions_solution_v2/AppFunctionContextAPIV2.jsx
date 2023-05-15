import Container from "./components/Container";
import ToursContextProvider from "./context/ToursContext";

export default function AppFunctionContextAPIV2() {
  return (
    <ToursContextProvider>
      <Container />
    </ToursContextProvider>
  );
}
