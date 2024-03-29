import { CartContainer, Navbar } from "./components";
import { useState, useEffect } from "react";

const url = "https://course-api.com/react-useReducer-cart-project";

export default function AppFunctionV1() {
  const [isLoading, setIsLoading] = useState(false);
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(() => true);
        const res = await fetch(url);
        if (!res.ok) {
          const errorResponse = await res.json();
          setIsError(true);
          setIsLoading(false);
          setErrorMessage(() => `${errorResponse["msg"]} ${res.status}`);
          throw Error(`${errorMessage}`);
        }
        const fetchedCart = await res.json();
        const correctedFetchedCart = fetchedCart.map((item) => ({
          id: item.id,
          title: item.title,
          price: item.price,
          img: item.img,
          quantity: item.amount,
        }));

        setErrorMessage("");
        setIsLoading(() => false);
        setCart(() => correctedFetchedCart);
      } catch (error) {
        setIsLoading(false);
        setIsError(true);
      }
    };

    fetchData();
  }, []);

  //---------------
  useEffect(() => {
    const getTotals = () => {
      let { totalPrice, totalItems } = cart.reduce(
        (cartTotal, cartItem) => {
          const { price, quantity } = cartItem;
          cartTotal.totalPrice += price * quantity;
          cartTotal.totalItems += quantity;

          return cartTotal;
        },
        { totalPrice: 0, totalItems: 0 },
      );
      totalPrice = parseFloat(totalPrice.toFixed(2));

      setTotalItems(() => totalItems);
      setTotalPrice(() => totalPrice);
    };

    getTotals();
  }, [cart]);

  const clearCart = () => {
    return setCart(() => []);
  };

  //---------------
  const removeItem = (id) => {
    setCart(() => cart.filter((item) => item.id !== id));
  };

  //---------------

  const updateQuantity = (id, value) => {
    let updatedCart = cart
      .map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity + value };
        }
        return item;
      })
      .filter((item) => item.quantity !== 0);
    return setCart(() => updatedCart);
  };

  return (
    <>
      <p className="title">function solution version 1</p>
      <main>
        <Navbar isLoading={isLoading} totalItems={totalItems} />
        <CartContainer
          isLoading={isLoading}
          isError={isError}
          errorMessage={errorMessage}
          cart={cart}
          totalItems={totalItems}
          totalPrice={totalPrice}
          clearCart={clearCart}
          removeItem={removeItem}
          updateQuantity={updateQuantity}
        />
      </main>
    </>
  );
}
