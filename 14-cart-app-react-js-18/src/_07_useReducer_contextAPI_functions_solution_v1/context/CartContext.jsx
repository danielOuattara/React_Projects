import { createContext, useEffect, useReducer } from "react";

import cartItemsReducer from "./../reducer/cartItems/cartItemsReducer";
import {
  clearCart,
  removeItem,
  updateQuantity,
  loading,
  loadCartData,
  getTotals,
} from "./../reducer/cartItems/cartItemsActions";

const url = "https://course-api.com/react-useReducer-cart-project";

export const CartContext = createContext();

const initialCartItemsState = {
  isLoading: false,
  cart: [],
  totalPrice: 0,
  totalItems: 0,
};

export default function CartContextProvider(props) {
  const [cartItemsState, dispatchCartItems] = useReducer(
    cartItemsReducer,
    initialCartItemsState,
  );

  const handleClearCart = () => {
    return dispatchCartItems(clearCart());
  };

  const handleRemoveItem = (id) => {
    return dispatchCartItems(removeItem(id));
  };

  const handleUpdateQuantity = (id, value) => {
    return dispatchCartItems(updateQuantity(id, value));
  };

  const handleFetchCartItems = async () => {
    dispatchCartItems(loading());
    const res = await fetch(url);
    const fetchedCart = await res.json();

    dispatchCartItems(loadCartData(fetchedCart));
  };

  useEffect(() => {
    handleFetchCartItems();
  }, []);

  useEffect(() => {
    dispatchCartItems(getTotals());
  }, [cartItemsState.cart]);

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
