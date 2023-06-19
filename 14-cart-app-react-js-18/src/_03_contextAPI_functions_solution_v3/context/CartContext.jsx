import { createContext } from "react";
import useFetchBag from "../customHooks/useFetchBag";

export const CartContext = createContext();

export default function CartContextProvider(props) {
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
    <CartContext.Provider
      value={{
        isLoading,
        cart,
        totalItems,
        totalPrice,
        clearCart,
        removeItem,
        updateQuantity,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
}
