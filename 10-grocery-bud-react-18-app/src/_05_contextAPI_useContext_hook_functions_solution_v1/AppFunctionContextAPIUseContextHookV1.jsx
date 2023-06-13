import GroceryContextProvider from "./context/GroceryContext";
import { Container } from "./components";

export default function AppFunctionContextAPIUseContextHookV1() {
  return (
    <GroceryContextProvider>
      <Container />
    </GroceryContextProvider>
  );
}
