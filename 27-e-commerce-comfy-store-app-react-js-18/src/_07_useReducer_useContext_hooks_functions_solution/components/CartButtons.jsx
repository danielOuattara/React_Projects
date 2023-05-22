import { FaShoppingCart, FaUserMinus, FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  useProductsContext,
  useCartContext,
  useUserContext,
  useUIContext,
} from "../context";
import { CartButtonsWrapper } from "./styleWrappers";

export default function CartButtons() {
  const { toggleSideBar } = useUIContext();
  const { totalItems } = useCartContext();
  return (
    <CartButtonsWrapper className="cart-btn-wrapper">
      <Link to="/cart" className="cart-btn" onClick={toggleSideBar}>
        <span className="cart-container">
          <FaShoppingCart />
          <span className="cart-value">{totalItems}</span>
        </span>
      </Link>
      <button className="auth-btn" type="button">
        Login <FaUserPlus />
      </button>
    </CartButtonsWrapper>
  );
}
