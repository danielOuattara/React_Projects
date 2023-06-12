import GroceryContextProvider from "./context/GroceryContext";
import { Container } from "./components";

export default function AppFunctionContextAPIV3() {
  return (
    <GroceryContextProvider>
      <Container />
    </GroceryContextProvider>
  );
}
