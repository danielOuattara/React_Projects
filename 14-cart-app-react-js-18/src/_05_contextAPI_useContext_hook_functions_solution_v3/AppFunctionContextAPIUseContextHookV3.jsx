import { CartContainer, Navbar } from "./components";
import CartContextProvider from "./context/CartContext";

export default function AppFunctionContextAPIUseContextHookV3() {
  return (
    <CartContextProvider>
      <p className="title">
        context API + useContext functions solution version 3
      </p>
      <main>
        <Navbar />
        <CartContainer />
      </main>
    </CartContextProvider>
  );
}
