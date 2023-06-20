import { CartIcon } from "./../components";
import { useSelector } from "react-redux";

export default function Navbar() {
  const { totalItems } = useSelector((state) => state.cart);
  return (
    <nav>
      <div className="nav-center">
        <h3>redux toolkit</h3>
        <div className="nav-container">
          <CartIcon />
          <div className="amount-container">
            <p className="total-amount">{totalItems}</p>
          </div>
        </div>
      </div>
    </nav>
  );
}
