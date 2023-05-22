import { useCartContext } from "../context/";
import { Link } from "react-router-dom";
import { CartContent, PageHero } from "../components";
import { CartPageWrapper } from "./styleWrappers";

export default function CartPage() {
  const {
    cart,
    totalItems,
    totalAmount,
    shippingFee,
    addToCart,
    removeItem,
    toggleAmount,
    clearCart,
  } = useCartContext();

  if (cart.length === 0) {
    return (
      <CartPageWrapper className="page-100">
        <div className="empty">
          <h2>Your cart is empty</h2>
          <Link to="/products" className="btn">
            fill it
          </Link>
        </div>
      </CartPageWrapper>
    );
  }

  return (
    <main>
      <PageHero title="cart" />
      <CartPageWrapper className="page">
        <CartContent>cart content</CartContent>
      </CartPageWrapper>
    </main>
  );
}
