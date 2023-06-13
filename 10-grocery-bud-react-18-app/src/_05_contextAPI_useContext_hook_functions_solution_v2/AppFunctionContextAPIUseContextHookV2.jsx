import GroceryContextProvider from "./context/GroceryContext";
import { Container } from "./components";

export default function AppFunctionContextAPIUseContextHookV2() {
  return (
    <GroceryContextProvider>
      <Container />
    </GroceryContextProvider>
  );
}
