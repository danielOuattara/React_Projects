import { CartContainer, Navbar } from "./components";
import CartContextProvider from "./context/CartContext";

export default function AppContextAPIFunctionV4() {
  return (
    <CartContextProvider>
      <p className="title">context API + functions solution version 4</p>
      <main>
        <Navbar />
        <CartContainer />
      </main>
    </CartContextProvider>
  );
}
