import { createContext } from "react";
import useFetchBag from "../customHooks/useFetchBag";
export const CartContext = createContext();

export default function CartContextProvider(props) {
  const { state, clearCart, removeItem, updateQuantity } = useFetchBag();

  return (
    <CartContext.Provider
      value={{
        ...state,
        clearCart,
        removeItem,
        updateQuantity,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
}
