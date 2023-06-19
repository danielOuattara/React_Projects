import { CartContainer, Navbar } from "./components";
import CartContextProvider from "./context/CartContext";

export default function AppFunctionUseReducerContextAPIV2() {
  return (
    <CartContextProvider>
      <p className="title"> useReducer + contextAPI version 2</p>
      <main>
        <Navbar />
        <CartContainer />
      </main>
    </CartContextProvider>
  );
}
