import { CartContainer, Navbar } from "./components";
import CartContextProvider from "./context/CartContext";

export default function AppFunctionContextAPIUseContextHookV4() {
  return (
    <CartContextProvider>
      <p className="title">
        context API + useContext functions solution version 4
      </p>
      <main>
        <Navbar />
        <CartContainer />
      </main>
    </CartContextProvider>
  );
}
