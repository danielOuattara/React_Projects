import { CartContainer, Navbar } from "./components";
import CartContextProvider from "./context/CartContext";

export default function AppFunctionUseReducerUseContextV1() {
  return (
    <CartContextProvider>
      <p className="title"> useReducer + contextAPI version 1</p>
      <main>
        <Navbar />
        <CartContainer />
      </main>
    </CartContextProvider>
  );
}
