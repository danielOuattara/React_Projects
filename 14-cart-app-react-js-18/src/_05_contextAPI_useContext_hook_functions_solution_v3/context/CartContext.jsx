import { createContext, useContext } from "react";
import useFetchBag from "../customHooks/useFetchBag";

const CartContext = createContext();

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

export const useCartContext = () => {
  return useContext(CartContext);
};
