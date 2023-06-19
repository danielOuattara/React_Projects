import CartContainer from "./components/CartContainer";
import Navbar from "./components/Navbar";
import useFetchBag from "./customHooks/useFetchBag";

export default function AppFunctionV4() {
  const { state, clearCart, removeItem, updateQuantity } = useFetchBag();
  return (
    <>
      <p className="title">function solution version 4</p>
      <main>
        <Navbar isLoading={state.isLoading} totalItems={state.totalItems} />
        <CartContainer
          {...state}
          clearCart={clearCart}
          removeItem={removeItem}
          updateQuantity={updateQuantity}
        />
      </main>
    </>
  );
}
