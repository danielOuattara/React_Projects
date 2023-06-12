import GroceryContextProvider from "./context/GroceryContext";
import { Container } from "./components";

export default function AppFunctionContextAPIV4() {
  return (
    <GroceryContextProvider>
      <Container />
    </GroceryContextProvider>
  );
}
