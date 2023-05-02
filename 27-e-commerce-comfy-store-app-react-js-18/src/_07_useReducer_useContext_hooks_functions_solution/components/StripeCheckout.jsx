import { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  CardElement,
  useStripe,
  Elements,
  useElements,
} from "@stripe/react-stripe-js";
import axios from "axios";
import { useCartContext, useUserContext } from "../context/";
import { formatPrice } from "../utilities/helpers";
import { useHistory } from "react-router-dom";
import { StripeCheckoutWrapper } from "./styleWrappers";

const CheckoutForm = () => {
  return <h4>hello from Stripe Checkout </h4>;
};

export default function StripeCheckout() {
  return (
    <StripeCheckoutWrapper>
      <CheckoutForm />
    </StripeCheckoutWrapper>
  );
}
