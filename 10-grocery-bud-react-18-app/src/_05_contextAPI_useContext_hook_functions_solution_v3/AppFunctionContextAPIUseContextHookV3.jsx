import GroceryContextProvider from "./context/GroceryContext";
import { Container } from "./components";

export default function AppFunctionContextAPIUseContextHookV3() {
  return (
    <GroceryContextProvider>
      <Container />
    </GroceryContextProvider>
  );
}
