import GroceryContextProvider from "./context/GroceryContext";
import { Container } from "./components";

export default function AppFunctionContextAPIV2() {
  return (
    <GroceryContextProvider>
      <Container />
    </GroceryContextProvider>
  );
}
