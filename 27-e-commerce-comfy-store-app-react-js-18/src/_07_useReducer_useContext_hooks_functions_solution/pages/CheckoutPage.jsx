import { PageHero, StripeCheckout } from "../components";
// extra imports
import { useCartContext } from "../context";
import { Link } from "react-router-dom";
import { CheckoutPageWrapper } from "./styleWrappers";

export default function CheckoutPage() {
  return (
    <main>
      <PageHero title="checkout" />
      <CheckoutPageWrapper className="page">
        <h2>checkout</h2>
      </CheckoutPageWrapper>
    </main>
  );
}
