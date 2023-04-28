import React, { useEffect, useContext, useReducer } from "react";
import { cartReducer } from "./../reducer";
import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
  CLEAR_CART,
  COUNT_CART_TOTALS,
} from "./../actions/actions";

const initialState = {};

const CartContext = React.createContext();

export default function CartContextProvider({ children }) {
  return (
    <CartContext.Provider value="cart context">{children}</CartContext.Provider>
  );
}

export const useCartContext = () => {
  return useContext(CartContext);
};
