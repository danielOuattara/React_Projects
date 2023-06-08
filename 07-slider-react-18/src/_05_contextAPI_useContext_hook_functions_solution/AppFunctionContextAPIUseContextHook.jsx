import SlidersContextProvider from "./context/SlidersContext";
import Container from "./components/Container";

export default function AppFunctionContextAPIUseContextHook() {
  // const {} = useSlidersContext();
  return (
    <SlidersContextProvider>
      <Container />
    </SlidersContextProvider>
  );
}
