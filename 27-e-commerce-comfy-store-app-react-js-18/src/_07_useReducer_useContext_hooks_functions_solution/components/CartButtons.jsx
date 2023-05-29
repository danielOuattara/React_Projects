import { FaShoppingCart, FaUserMinus, FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCartContext, useUserContext, useUIContext } from "../context";
import { CartButtonsWrapper } from "./styleWrappers";

export default function CartButtons() {
  const { toggleSideBar } = useUIContext();
  const { totalItems } = useCartContext();
  const { loginWithRedirect, logout, myUser, isAuthenticated } =
    useUserContext();

  return (
    <CartButtonsWrapper className="cart-btn-wrapper">
      <Link to="/cart" className="cart-btn" onClick={toggleSideBar}>
        <span className="cart-container">
          Cart
          <FaShoppingCart />
          <span className="cart-value">{totalItems}</span>
        </span>
      </Link>
      {myUser /* isAuthenticated */ ? (
        <button
          className="auth-btn"
          type="button"
          onClick={() => logout({ returnTo: window.location.origin })}
        >
          Logout <FaUserMinus />
        </button>
      ) : (
        <button className="auth-btn" type="button" onClick={loginWithRedirect}>
          Login <FaUserPlus />
        </button>
      )}
    </CartButtonsWrapper>
  );
}
