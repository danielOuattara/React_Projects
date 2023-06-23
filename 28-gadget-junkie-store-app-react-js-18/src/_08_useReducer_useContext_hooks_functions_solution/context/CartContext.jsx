import { useEffect, createContext, useContext, useReducer } from "react";
import { cartReducer /* , filterReducer  */ } from "./../reducer";
import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  UPDATE_CART_ITEM_AMOUNT,
  CLEAR_CART,
  COUNT_CART_TOTALS,
} from "./../actions/actions";

const initialState = {
  cart: JSON.parse(localStorage.getItem("cart")) || [],
  cartMessageError: "",
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

  const updateAmount = (value, id) => {
    dispatchCart({ type: UPDATE_CART_ITEM_AMOUNT, payload: { id, value } });
  };

  const removeItem = (id) => {
    dispatchCart({ type: REMOVE_CART_ITEM, payload: { id } });
  };

  const clearCart = () => {
    dispatchCart({ type: CLEAR_CART });
  };

  useEffect(() => {
    dispatchCart({ type: COUNT_CART_TOTALS });
    localStorage.setItem("cart", JSON.stringify(cartState.cart));
  }, [cartState.cart]);

  return (
    <CartContext.Provider
      value={{ ...cartState, addToCart, removeItem, updateAmount, clearCart }}
    >
      {props.children}
    </CartContext.Provider>
  );
}

export const useCartContext = () => {
  return useContext(CartContext);
};
