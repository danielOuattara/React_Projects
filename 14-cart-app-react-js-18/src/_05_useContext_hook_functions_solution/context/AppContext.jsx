import React, { useState, useContext, useEffect } from "react";
import { cartItems } from "../../data/data";
//-----------------------------------------------------------------

const url = "https://course-api.com/react-useReducer-cart-project";

// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export const AppContext = React.createContext();

export default function AppContextProvider({ children }) {
  const [state, setState] = useState({
    isLoading: false,
    cart: cartItems,
    totalPrice: 0,
    totalItems: 0,
  });

  //---------------
  const clearCart = () => {
    return setState((prevState) => ({
      ...prevState,
      isLoading: false,
      cart: [],
    }));
  };

  //---------------
  const removeItem = (id) => {
    return setState((prevState) => ({
      ...prevState,
      cart: state.cart.filter((item) => item.id !== id),
    }));
  };

  //---------------
  const decreaseAmount = (id) => {
    let cartDecreased = state.cart
      .map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      })
      .filter((item) => item.quantity !== 0);

    return setState((prevState) => ({ ...prevState, cart: cartDecreased }));
  };

  //---------------
  const increaseAmount = (id) => {
    let cartDecreased = state.cart.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });

    return setState((prevState) => ({ ...prevState, cart: cartDecreased }));
  };

  //---------------
  const fetchData = async () => {
    setState((prevState) => ({ ...prevState, isLoading: true }));
    const res = await fetch(url);
    const fetchedCart = await res.json();
    const correctedFetchedCart = fetchedCart.map((item) => ({
      id: item.id,
      title: item.title,
      price: item.price,
      img: item.img,
      quantity: item.amount,
    }));
    return setState((prevState) => ({
      ...prevState,
      cart: correctedFetchedCart,
      isLoading: false,
    }));
  };

  //---------------
  useEffect(() => {
    const getTotals = () => {
      let { totalPrice, totalItems } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, quantity } = cartItem;
          cartTotal.totalPrice += price * quantity;
          cartTotal.totalItems += quantity;

          return cartTotal;
        },
        { totalPrice: 0, totalItems: 0 },
      );
      totalPrice = parseFloat(totalPrice.toFixed(2));

      return setState((prevState) => ({
        ...prevState,
        totalPrice,
        totalItems,
      }));
    };

    getTotals();
  }, [state.cart]);

  //---------------
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AppContext.Provider
      value={{
        ...state,
        setState,
        clearCart,
        removeItem,
        decreaseAmount,
        increaseAmount,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
