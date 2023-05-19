import { useEffect, createContext, useContext, useReducer } from "react";
import { cartReducer, filterReducer } from "./../reducer";
import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
  CLEAR_CART,
  COUNT_CART_TOTALS,
} from "./../actions/actions";

const initialState = {
  cart: [],
  totalItems: 0,
  totalAmount: 0,
  shippingFee: 534,
};

const CartContext = createContext();

export default function CartContextProvider(props) {
  const [cartState, dispatchCart] = useReducer(cartReducer, initialState);

  const addToCart = (id, mainColor, amount, singleProduct) => {
    dispatchCart({
      type: ADD_TO_CART,
      payload: { id, mainColor, amount, singleProduct },
    });
  };

  const removeItem = (id) => {};
  const toggleAmount = (idn, value) => {};
  const clearCart = () => {};

  return (
    <CartContext.Provider
      value={{ ...cartState, addToCart, removeItem, toggleAmount, clearCart }}
    >
      {props.children}
    </CartContext.Provider>
  );
}

export const useCartContext = () => {
  return useContext(CartContext);
};
