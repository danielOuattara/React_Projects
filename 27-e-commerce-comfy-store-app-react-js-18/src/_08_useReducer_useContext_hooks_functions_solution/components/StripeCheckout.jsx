import { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
//---
// import {
//   PaymentElement,
//   LinkAuthenticationElement,
//   useStripe,
//   useElements,
// } from "@stripe/react-stripe-js";
//---------------------------------------------------------------

// import { CardElement } from "@stripe/react-stripe-js";

//----------------------------------------------------------------
import axios from "axios";
import { useCartContext /* , useUserContext  */ } from "../context/";
// import { priceFormatter } from "./../../utilities/";
// import { useNavigate } from "react-router-dom";
import { StripeCheckoutWrapper } from "./styleWrappers";
import { CheckoutForm } from "./index";

//-----------------------------------------------------------------

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

export default function StripeCheckout() {
  const [clientSecret, setClientSecret] = useState("");

  const { cart, shippingFee /* , clearCart */ } = useCartContext();
  // const { myUser } = useUserContext();

  useEffect(() => {
    async function createPaymentIntent() {
      try {
        const { data } = await axios.post(
          `/.netlify/functions/create-payment-intent`,
          JSON.stringify({ cart, shippingFee }),
        );
        console.log("data.clientSecret = ", data.clientSecret);

        setClientSecret(() => data.clientSecret);
      } catch (error) {
        console.log("ERROR = ", error.response);
      }
    }

    createPaymentIntent();
  }, []);

  const appearance = {
    theme: "stripe",
  };

  const options = {
    clientSecret,
    appearance,
  };

  return (
    <StripeCheckoutWrapper>
      {clientSecret && (
        <Elements stripe={stripePromise} options={options}>
          <CheckoutForm />
        </Elements>
      )}
    </StripeCheckoutWrapper>
  );
}
