import CartContainer from "./components/CartContainer";
import Navbar from "./components/Navbar";
import useFetchBag from "./customHooks/useFetchBag";

export default function AppFunctionV3() {
  const {
    isLoading,
    cart,
    totalItems,
    totalPrice,
    clearCart,
    removeItem,
    updateQuantity,
  } = useFetchBag();
  return (
    <>
      <p className="title">function solution version 3</p>
      <main>
        <Navbar isLoading={isLoading} totalItems={totalItems} />
        <CartContainer
          isLoading={isLoading}
          cart={cart}
          totalItems={totalItems}
          totalPrice={totalPrice}
          clearCart={clearCart}
          removeItem={removeItem}
          updateQuantity={updateQuantity}
        />
      </main>
    </>
  );
}
