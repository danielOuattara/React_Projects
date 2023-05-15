import Container from "./components/Container";
import ToursContextProvider from "./context/ToursContext";

export default function AppFunctionContextAPIUseContextHook() {
  return (
    <ToursContextProvider>
      <Container />
    </ToursContextProvider>
  );
}
