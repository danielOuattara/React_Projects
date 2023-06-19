import { CartContainer, Navbar } from "./components";
import { useState, useEffect } from "react";

const url = "https://course-api.com/react-useReducer-cart-project";

export default function AppFunctionV2() {
  const [state, setState] = useState({
    isLoading: false,
    cart: [],
    totalItems: 0,
    totalPrice: 0,
  });

  //------------
  useEffect(() => {
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

      setState((prevState) => ({
        ...prevState,
        isLoading: false,
        cart: correctedFetchedCart,
      }));
    };

    fetchData();
  }, [setState]);

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

      setState((prevState) => ({ ...prevState, totalItems, totalPrice }));
    };

    getTotals();
  }, [setState, state.cart]);

  const clearCart = () => setState((prevState) => ({ ...prevState, cart: [] }));

  //---------------
  const removeItem = (id) => {
    setState((prevState) => ({
      ...prevState,
      cart: prevState.cart.filter((item) => item.id !== id),
    }));
  };

  //---------------

  const updateQuantity = (id, value) => {
    let updatedCart = state.cart
      .map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity + value };
        }
        return item;
      })
      .filter((item) => item.quantity !== 0);
    return setState((prevState) => ({ ...prevState, cart: updatedCart }));
  };

  return (
    <>
      <p className="title">function solution version 2</p>
      <main>
        <Navbar isLoading={state.isLoading} totalItems={state.totalItems} />
        <CartContainer
          {...state}
          clearCart={clearCart}
          removeItem={removeItem}
          updateQuantity={updateQuantity}
        />
      </main>
    </>
  );
}
