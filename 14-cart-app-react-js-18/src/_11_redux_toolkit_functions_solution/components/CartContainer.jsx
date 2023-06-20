import { CartItem } from "./";
import { useSelector, useDispatch } from "react-redux";
import { showModal } from "./../redux/modal/modal-slice";

export default function CartContainer() {
  const { cartItems, totalPrice, totalItems } = useSelector(
    (state) => state.cart,
  );
  const dispatch = useDispatch();

  if (totalItems === 0) {
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
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total articles<span>{totalItems}</span>
          </h4>
          <h4>
            total price <span>${totalPrice}</span>
          </h4>
        </div>
        <button className="btn clear-btn" onClick={() => dispatch(showModal())}>
          clear cart
        </button>
      </footer>
    </section>
  );
}
