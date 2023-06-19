import CartItem from "./CartItem";
import { CartContext } from "../context/CartContext";

export default function CartContainer() {
  return (
    <CartContext.Consumer>
      {(context) => {
        if (context.isLoading) {
          return <h1 className="loading">Loading ...</h1>;
        }

        if (context.cart.length === 0) {
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
              {context.cart.map((item) => {
                return <CartItem key={item.id} {...item} />;
              })}
            </div>
            <footer>
              <hr />
              <div className="cart-total">
                <h4>
                  total {context.totalItems > 1 ? "articles" : "article"}{" "}
                  <span>{context.totalItems}</span>
                </h4>
                <h4>
                  total price <span>${context.totalPrice}</span>
                </h4>
              </div>
              <button className="btn clear-btn" onClick={context.clearCart}>
                clear cart
              </button>
            </footer>
          </section>
        );
      }}
    </CartContext.Consumer>
  );
}
