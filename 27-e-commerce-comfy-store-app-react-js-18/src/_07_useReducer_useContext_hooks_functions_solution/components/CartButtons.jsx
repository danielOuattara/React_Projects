import { FaShoppingCart, FaUserMinus, FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useProductsContext, useCartContext, useUserContext } from "../context";
import { CartButtonsWrapper } from "./styleWrappers";

export default function CartButtons() {
  return (
    <CartButtonsWrapper className="cart-btn-wrapper">
      <Link to="/cart" className="cart-btn">
        <span className="cart-container">
          <FaShoppingCart />
          <span className="cart-value">12</span>
        </span>
      </Link>
      <button className="auth-btn" type="button">
        Login <FaUserPlus />
      </button>
    </CartButtonsWrapper>
  );
}
