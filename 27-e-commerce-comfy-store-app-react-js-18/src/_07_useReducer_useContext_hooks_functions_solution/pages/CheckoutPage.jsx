import { PageHero, StripeCheckout } from "../components";
// extra imports
import { useCartContext } from "../context";
import { Link } from "react-router-dom";
import { CheckoutPageWrapper } from "./styleWrappers";

export default function CheckoutPage() {
  const { cart } = useCartContext();
  console.log(cart);
  return (
    <main>
      <PageHero title="checkout" />
      <CheckoutPageWrapper className="page">
        {cart.length === 0 ? (
          <div className="empty">
            <h2>Your cart is empty</h2>
            <Link to="/product" className="btn">
              fill it
            </Link>
          </div>
        ) : (
          <StripeCheckout />
        )}
      </CheckoutPageWrapper>
    </main>
  );
}
