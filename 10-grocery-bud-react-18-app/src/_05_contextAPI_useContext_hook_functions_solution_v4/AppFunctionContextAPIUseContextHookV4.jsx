import GroceryContextProvider from "./context/GroceryContext";
import { Container } from "./components";

export default function AppFunctionContextAPIUseContextHookV4() {
  return (
    <GroceryContextProvider>
      <Container />
    </GroceryContextProvider>
  );
}
