import { CartContainer, Navbar } from "./components";
import useFetchCartItems from "./customHooks/useFetchCartItems";

export default function AppFunctionUseReducerV2() {
  const {
    cartItemsState,
    handleClearCart,
    handleRemoveItem,
    handleUpdateQuantity,
  } = useFetchCartItems();

  return (
    <>
      <p className="title"> useReducer version 2</p>
      <main>
        <Navbar
          isLoading={cartItemsState.isLoading}
          totalItems={cartItemsState.totalItems}
        />
        <CartContainer
          {...cartItemsState}
          clearCart={handleClearCart}
          removeItem={handleRemoveItem}
          updateQuantity={handleUpdateQuantity}
        />
      </main>
    </>
  );
}
