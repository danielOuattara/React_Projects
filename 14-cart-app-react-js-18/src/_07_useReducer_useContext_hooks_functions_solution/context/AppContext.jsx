import React, { useContext, useReducer, useEffect } from "react";
import { cartItems } from "../../data/data";
import cartItemsReducer from "../reducer/cartItemsReducer";
//-----------------------------------------------------------------

const url = "https://course-api.com/react-useReducer-cart-project";

// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export const AppContext = React.createContext();

const initialCartItemsState = {
  isLoading: false,
  cart: cartItems,
  totalPrice: 0,
  totalItems: 0,
};

export default function AppContextProvider({ children }) {
  const [state, dispatch] = useReducer(cartItemsReducer, initialCartItemsState);

  //---------------
  const clearCart = () => {
    dispatch({
      type: "CLEAR_CART",
    });
  };

  //---------------
  const removeItem = (id) => {
    dispatch({
      type: "REMOVE_ITEM",
      payload: id,
    });
  };

  //---------------
  const decreaseAmount = (id) => {
    // replaced by toggleAmount
    dispatch({
      type: "DECREASE_AMOUNT",
      payload: id,
    });
  };

  //---------------
  const increaseAmount = (id) => {
    // replaced by toggleAmount
    dispatch({
      type: "INCREASE_AMOUNT",
      payload: id,
    });
  };

  //---------------
  const fetchData = async () => {
    dispatch({ type: "LOADING" });
    const res = await fetch(url);
    const fetchedCart = await res.json();
    console.log("fetchedCart = ", fetchedCart);
    dispatch({ type: "DISPLAY_ITEMS", payload: fetchedCart });
  };

  //---------------
  // const toggleAmount = (id, type) => {
  //   dispatch({ type: "MODIFY_AMOUNT", payload: { id, type } });
  // };

  //---------------
  useEffect(() => {
    dispatch({ type: "GET_TOTALS" });
  }, [state.cart]);

  //---------------
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        removeItem,
        increaseAmount,
        decreaseAmount,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
