import React from "react";
import CartItem from "./CartItem";

export default function CartContainer(props) {
  if (props.isLoading) {
    return <h1 className="loading">Loading ...</h1>;
  }
  if (props.isError) {
    return <h1 className="">{props.errorMessage}</h1>;
  }

  if (props.cart.length === 0) {
    return (
      <section className="cart">
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      <header>
        <h2>your bag</h2>
      </header>
      <div>
        {props.cart.map((item) => {
          return (
            <CartItem
              key={item.id}
              {...item}
              removeItem={props.removeItem}
              updateQuantity={props.updateQuantity}
            />
          );
        })}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total {props.totalItems > 1 ? "articles" : "article"}{" "}
            <span>{props.totalItems}</span>
          </h4>
          <h4>
            total price <span>${props.totalPrice}</span>
          </h4>
        </div>
        <button className="btn clear-btn" onClick={props.clearCart}>
          clear cart
        </button>
      </footer>
    </section>
  );
}
