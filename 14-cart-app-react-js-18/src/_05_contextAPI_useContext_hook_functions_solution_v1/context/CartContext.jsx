import { createContext, useContext, useEffect, useState } from "react";
const url = "https://course-api.com/react-useReducer-cart-project";

export const CartContext = createContext();

export default function CartContextProvider(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(() => true);
      const res = await fetch(url);
      const fetchedCart = await res.json();
      const correctedFetchedCart = fetchedCart.map((item) => ({
        id: item.id,
        title: item.title,
        price: item.price,
        img: item.img,
        quantity: item.amount,
      }));

      setIsLoading(() => false);
      setCart(() => correctedFetchedCart);
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
    <CartContext.Provider
      value={{
        isLoading,
        cart,
        totalItems,
        totalPrice,
        clearCart,
        removeItem,
        updateQuantity,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
}

export const useCartContext = () => {
  return useContext(CartContext);
};
