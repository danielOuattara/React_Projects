import CartContainer from "./components/CartContainer";
import Navbar from "./components/Navbar";
import React, { useReducer, useEffect } from "react";
import { cartItems } from "./../data/data";
import cartItemsReducer from "./reducer/cartItemsReducer";

const url = "https://course-api.com/react-useReducer-cart-project";

const initialCartItemsState = {
  isLoading: false,
  cart: cartItems,
  totalPrice: 0,
  totalItems: 0,
};

export default function AppUseReducerHookFunction() {
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
    <>
      <br /> <hr /> <br />
      <p style={{ textAlign: "center" }}>
        useReducer + useContext functions solution
      </p>
      <main>
        <Navbar isLoading={state.isLoading} totalItems={state.totalItems} />
        <CartContainer
          cart={state.cart}
          isLoading={state.isLoading}
          totalPrice={state.totalPrice}
          totalItems={state.totalItems}
          clearCart={clearCart}
          removeItem={removeItem}
          increaseAmount={increaseAmount}
          decreaseAmount={decreaseAmount}
        />
      </main>
    </>
  );
}
