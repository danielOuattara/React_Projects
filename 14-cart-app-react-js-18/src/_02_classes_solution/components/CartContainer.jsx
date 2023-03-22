import { Component } from "react";
import CartItem from "../components/CartItem";

export default class CartContainer extends Component {
  render() {
    if (this.props.isLoading) {
      return <h1 className="loading">Loading ...</h1>;
    }

    if (this.props.cart.length === 0) {
      return (
        <section className="cart">
          {/* cart header */}
          <header>
            <h2>your bag</h2>
            <h4 className="empty-cart">is currently empty</h4>
          </header>
        </section>
      );
    }

    return (
      <section className="cart">
        {/* cart header */}
        <header>
          <h2>your bag</h2>
        </header>
        {/* cart items */}
        <div>
          {this.props.cart.map((item) => {
            return (
              <CartItem
                key={item.id}
                {...item}
                removeItem={this.props.removeItem}
                decreaseAmount={this.props.decreaseAmount}
                increaseAmount={this.props.increaseAmount}
              />
            );
          })}
        </div>
        {/* cart footer */}
        <footer>
          <hr />
          <div className="cart-total">
            <h4>
              total {this.props.totalItems > 1 ? "articles" : "article"}{" "}
              <span>{this.props.totalItems}</span>
            </h4>
            <h4>
              total price <span>${this.props.totalPrice}</span>
            </h4>
          </div>
          <button className="btn clear-btn" onClick={this.props.clearCart}>
            clear cart
          </button>
        </footer>
      </section>
    );
  }
}
