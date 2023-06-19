import { Component } from "react";
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import { cartItems } from "./../data/data";
//---------------------------------------------------

const url = "https://course-api.com/react-useReducer-cart-project";

export default class AppClasses extends Component {
  state = {
    isLoading: false,
    cart: cartItems,
    totalPrice: 0,
    totalItems: 0,
  };

  //---------------
  clearCart = () => {
    return this.setState((prevState) => ({
      ...prevState,
      isLoading: false,
      cart: [],
    }));
  };

  //---------------
  removeItem = (id) => {
    return this.setState((prevState) => ({
      ...prevState,
      cart: this.state.cart.filter((item) => item.id !== id),
    }));
  };

  //---------------
  decreaseAmount = (id) => {
    let cartDecreased = this.state.cart
      .map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      })
      .filter((item) => item.quantity !== 0);

    return this.setState((prevState) => ({
      ...prevState,
      cart: cartDecreased,
    }));
  };

  //---------------
  increaseAmount = (id) => {
    let cartDecreased = this.state.cart.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });

    return this.setState((prevState) => ({
      ...prevState,
      cart: cartDecreased,
    }));
  };

  //---------------
  fetchData = async () => {
    this.setState((prevState) => ({ ...prevState, isLoading: true }));
    const res = await fetch(url);
    const fetchedCart = await res.json();
    const correctedFetchedCart = fetchedCart.map((item) => ({
      id: item.id,
      title: item.title,
      price: item.price,
      img: item.img,
      quantity: item.amount,
    }));
    return this.setState((prevState) => ({
      ...prevState,
      cart: correctedFetchedCart,
      isLoading: false,
    }));
  };

  //---------------
  componentDidMount() {
    this.fetchData();
  }

  //---------------
  getTotals = () => {
    let { totalPrice, totalItems } = this.state.cart.reduce(
      (cartTotal, cartItem) => {
        const { price, quantity } = cartItem;
        cartTotal.totalPrice += price * quantity;
        cartTotal.totalItems += quantity;

        return cartTotal;
      },
      { totalPrice: 0, totalItems: 0 },
    );
    totalPrice = parseFloat(totalPrice.toFixed(2));

    return this.setState((prevState) => ({
      ...prevState,
      totalPrice,
      totalItems,
    }));
  };

  //---------------
  componentDidUpdate(prevProps, prevState) {
    if (prevState.cart !== this.state.cart) {
      this.getTotals();
    }
  }
  render() {
    return (
      <>
        <p className="title"> classes solution</p>
        <main>
          <Navbar
            isLoading={this.state.isLoading}
            totalItems={this.state.totalItems}
          />
          <CartContainer
            {...this.state}
            clearCart={this.clearCart}
            removeItem={this.removeItem}
            decreaseAmount={this.decreaseAmount}
            increaseAmount={this.increaseAmount}
          />
        </main>
      </>
    );
  }
}
