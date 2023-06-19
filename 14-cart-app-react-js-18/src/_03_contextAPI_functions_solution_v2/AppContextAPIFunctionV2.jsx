import { CartContainer, Navbar } from "./components";
import CartContextProvider from "./context/CartContext";

export default function AppContextAPIFunctionV2() {
  return (
    <CartContextProvider>
      <p className="title">context API + functions solution version 2</p>
      <main>
        <Navbar />
        <CartContainer />
      </main>
    </CartContextProvider>
  );
}
