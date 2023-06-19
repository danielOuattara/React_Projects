import { CartContainer, Navbar } from "./components";
import CartContextProvider from "./context/CartContext";

export default function AppFunctionUseReducerUseContextV2() {
  return (
    <CartContextProvider>
      <p className="title"> useReducer + useContext version 2</p>
      <main>
        <Navbar />
        <CartContainer />
      </main>
    </CartContextProvider>
  );
}
