import { CartContainer, Navbar } from "./components";
import CartContextProvider from "./context/CartContext";

export default function AppFunctionContextAPIUseContextHookV1() {
  return (
    <CartContextProvider>
      <p className="title">context API + useContext solution version 1</p>
      <main>
        <Navbar />
        <CartContainer />
      </main>
    </CartContextProvider>
  );
}
