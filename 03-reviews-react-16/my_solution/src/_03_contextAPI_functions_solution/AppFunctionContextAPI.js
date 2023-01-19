import Container from "./components/Container";
import ToursContextProvider from "./context/ToursContext";

function AppFunctionContextAPI() {
  return (
    <ToursContextProvider>
      <Container />
    </ToursContextProvider>
  );
}

export default AppFunctionContextAPI;
