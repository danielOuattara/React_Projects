import GroceryContextProvider from "./context/GroceryContext";
import { Container } from "./components";

export default function AppFunctionUseReducerUseContext() {
  return (
    <GroceryContextProvider>
      <Container />
    </GroceryContextProvider>
  );
}
