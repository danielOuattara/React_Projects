import CartContainer from "./components/CartContainer";
import Navbar from "./components/Navbar";
import useFetchBag from "./customHooks/useFetchBag";

export default function AppFunction() {
  const { state, clearCart, removeItem, decreaseAmount, increaseAmount } =
    useFetchBag();
  return (
    <>
      <br /> <hr /> <br />
      <p style={{ textAlign: "center" }}>function solution</p>
      <main>
        <Navbar isLoading={state.isLoading} totalItems={state.totalItems} />
        <CartContainer
          {...state}
          clearCart={clearCart}
          removeItem={removeItem}
          decreaseAmount={decreaseAmount}
          increaseAmount={increaseAmount}
        />
      </main>
    </>
  );
}
