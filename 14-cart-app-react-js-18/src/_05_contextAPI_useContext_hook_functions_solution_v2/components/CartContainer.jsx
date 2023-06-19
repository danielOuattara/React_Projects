import CartItem from "./CartItem";
import { useCartContext } from "../context/CartContext";

export default function CartContainer() {
  const { isLoading, cart, totalItems, totalPrice, clearCart } =
    useCartContext();

  if (isLoading) {
    return <h1 className="loading">Loading ...</h1>;
  }

  if (cart.length === 0) {
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
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total {totalItems > 1 ? "articles" : "article"}{" "}
            <span>{totalItems}</span>
          </h4>
          <h4>
            total price <span>${totalPrice}</span>
          </h4>
        </div>
        <button className="btn clear-btn" onClick={clearCart}>
          clear cart
        </button>
      </footer>
    </section>
  );
}
