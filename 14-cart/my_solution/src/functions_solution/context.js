import React, { useContext, useReducer, useEffect } from "react";
import cartItems from "./../data";
import reducer from "./reducer";

const url = "https://course-api.com/react-useReducer-cart-project";

const AppContext = React.createContext();

const initialState = {
  loading: false,
  cart: cartItems,
  total: 0,
  amount: 0,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const clearCart = () => {
    dispatch({
      type: "CLEAR_CART",
    });
  };

  const removeItem = (id) => {
    dispatch({
      type: "REMOVE_ITEM",
      payload: id,
    });
  };

  // const decreaseAmount = (id) => {  // remplaced by toggleAmount
  //   dispatch({
  //     type: "DECREASE_AMOUNT",
  //     payload: id,
  //   });
  // };

  // const increaseAmount = (id) => {  // remplaced by toggleAmount
  //   dispatch({
  //     type: "INCREASE_AMOUNT",
  //     payload: id,
  //   });
  // };

  const fetchData = async () => {
    dispatch({ type: "LOADING" });
    const res = await fetch(url);
    const fetchedCart = await res.json();
    dispatch({ type: "DISPLAY_ITEMS", payload: fetchedCart });
  };

  const toggleAmount = (id, type) =>  {
    dispatch({type: 'MODIFY_AMOUNT', payload: {id, type}})
  }

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    dispatch({ type: "GET_TOTALS" });
  }, [state.cart]);

  return (
    <AppContext.Provider
      value={{
        ...state,
        dispatch,
        clearCart,
        removeItem,
        // decreaseAmount,
        // increaseAmount,
        toggleAmount
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
