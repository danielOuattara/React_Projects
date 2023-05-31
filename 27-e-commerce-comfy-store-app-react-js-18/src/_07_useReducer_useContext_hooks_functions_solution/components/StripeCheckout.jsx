import { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  CardElement,
  useStripe,
  Elements,
  useElements,
  PaymentElement,
  LinkAuthenticationElement,
} from "@stripe/react-stripe-js";
import axios from "axios";
import { useCartContext, useUserContext } from "../context/";
import { priceFormatter } from "./../../utilities/";
import { useHistory, Navigate } from "react-router-dom";
import { StripeCheckoutWrapper } from "./styleWrappers";

//-----------------------------------------------------------------
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const CheckoutForm = () => {
  const { cart, totalAmount, shippingFee, clearCart } = useCartContext();
  const { myUser } = useUserContext();

  return <h4>hello from Stripe Checkout </h4>;
};

export default function StripeCheckout() {
  return (
    <StripeCheckoutWrapper>
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </StripeCheckoutWrapper>
  );
}
