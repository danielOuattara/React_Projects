/* 

AppContextAPI V1 : 

*/

import GroceryContextProvider from "./context/GroceryContext";
import { Container } from "./components";

export default function AppFunctionContextAPIV1() {
  return (
    <GroceryContextProvider>
      <Container />
    </GroceryContextProvider>
  );
}
