import { createContext } from "react";
import useFetchCartItems from "../customHooks/useFetchCartItems";

export const CartContext = createContext();

export default function CartContextProvider(props) {
  const {
    cartItemsState,
    handleClearCart,
    handleRemoveItem,
    handleUpdateQuantity,
  } = useFetchCartItems();

  const context = {
    ...cartItemsState,
    clearCart: handleClearCart,
    removeItem: handleRemoveItem,
    updateQuantity: handleUpdateQuantity,
  };

  return (
    <CartContext.Provider value={context}>
      {props.children}
    </CartContext.Provider>
  );
}
