import { CartContainer, Navbar } from "./components";
import CartContextProvider from "./context/CartContext";

export default function AppFunctionUseReducerUseContextV1() {
  return (
    <CartContextProvider>
      <p className="title"> useReducer + useContext version 1</p>
      <main>
        <Navbar />
        <CartContainer />
      </main>
    </CartContextProvider>
  );
}
