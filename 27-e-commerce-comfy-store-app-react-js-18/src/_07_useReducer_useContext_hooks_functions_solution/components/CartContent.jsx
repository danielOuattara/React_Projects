import { CartContentWrapper } from "./styleWrappers";
import { useCartContext } from "../context/";
import { Link } from "react-router-dom";
import CartColumns from "./CartColumns";
import CartItem from "./CartItem";
import CartTotals from "./CartTotals";

//---------------------------------------------
export default function CartContent() {
  const { cart, clearCart } = useCartContext();

  return (
    <CartContentWrapper className="section section-center">
      <CartColumns />
      {cart.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
      <hr />
      <div className="link-container">
        <Link to="/products" className="link-btn">
          continue shopping
        </Link>
        <button
          type="button"
          className="link-btn clear-btn"
          onClick={clearCart}
        >
          clear shopping cart
        </button>
      </div>

      <CartTotals />
    </CartContentWrapper>
  );
}
