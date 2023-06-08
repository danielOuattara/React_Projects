import SlidersContextProvider from "./context/SlidersContext";
import Container from "./components/Container";

export default function AppFunctionUseReducerUseContext() {
  return (
    <SlidersContextProvider>
      <Container />;
    </SlidersContextProvider>
  );
}
