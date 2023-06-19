import { CartContainer, Navbar } from "./components";
import CartContextProvider from "./context/CartContext";

export default function AppContextAPIFunctionV1() {
  return (
    <CartContextProvider>
      <p className="title">context API + functions solution version 1</p>
      <main>
        <Navbar />
        <CartContainer />
      </main>
    </CartContextProvider>
  );
}
