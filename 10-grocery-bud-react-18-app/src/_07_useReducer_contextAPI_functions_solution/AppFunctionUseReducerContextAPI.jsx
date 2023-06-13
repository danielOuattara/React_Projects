import GroceryContextProvider from "./context/GroceryContext";
import { Container } from "./components";

export default function AppFunctionUseReducerContextAPI() {
  return (
    <GroceryContextProvider>
      <Container />
    </GroceryContextProvider>
  );
}
