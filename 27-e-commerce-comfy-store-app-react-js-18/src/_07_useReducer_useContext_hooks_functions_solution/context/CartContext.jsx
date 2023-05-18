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
  return (
    <CartContext.Provider value={{ ...cartState }}>
      {props.children}
    </CartContext.Provider>
  );
}

export const useCartContext = () => {
  return useContext(CartContext);
};
