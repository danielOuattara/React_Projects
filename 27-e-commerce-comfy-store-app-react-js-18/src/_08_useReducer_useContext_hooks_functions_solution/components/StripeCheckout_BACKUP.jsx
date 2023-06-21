import { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
//---
import {
  PaymentElement,
  LinkAuthenticationElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
//---------------------------------------------------------------

import { CardElement } from "@stripe/react-stripe-js";

//----------------------------------------------------------------
import axios from "axios";
import { useCartContext, useUserContext } from "../context/";
import { priceFormatter } from "./../../utilities/";
import { useNavigate } from "react-router-dom";
import { StripeCheckoutWrapper } from "./styleWrappers";

//-----------------------------------------------------------------

function CheckoutForm() {
  const { cart, totalAmount, shippingFee, clearCart } = useCartContext();
  const { myUser } = useUserContext();

  // Stripe
  const cardStyle = {
    style: {
      base: {
        color: "#32325d",
        fontFamily: "Arial, sans-serif",
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#32325d",
        },
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a",
      },
    },
  };

  const paymentElementOptions = {
    layout: "tabs",
  };

  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState("");

  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  useEffect(() => {
    async function createPaymentIntent() {
      try {
        const { data } = await axios.post(
          `/.netlify/functions/create-payment-intent`,
          JSON.stringify({ cart, totalAmount, shippingFee }),
        );

        setClientSecret(data.clientSecret);
      } catch (error) {
        console.log("ERROR = ", error.response);
      }
    }

    createPaymentIntent();
  }, []);

  const handleChange = async (event) => {
    setDisabled(() => event.empty);
    setError(event.error ? event.error.message : "");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);
    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });

    if (payload.error) {
      setError(() => `Payment failed ${payload.error.message}`);
      setProcessing(false);
    } else {
      setError(null);
      setProcessing(false);
      setSucceeded(true);

      setTimeout(() => {
        clearCart();
        navigate("/");
      }, 5000);
    }
  };

  return (
    <div>
      {succeeded ? (
        <article>
          <h4>Thank you </h4>
          <h4>Your payment was successful !</h4>
          <h4>Redirecting to home page show </h4>
        </article>
      ) : (
        <article>
          <h4> Hello {myUser && myUser.name}</h4>
          <p>Your total is {priceFormatter(shippingFee + totalAmount)}</p>
          <p>Test card number: 4242 4242 4242 4242</p>
        </article>
      )}
      <form id="payment-form" onSubmit={handleSubmit}>
        <CardElement
          id="card-element"
          onChange={handleChange}
          options={cardStyle}
          // options={paymentElementOptions}
        />
        <button disabled={processing || disabled || succeeded} id="submit">
          <span id="button-text">
            {processing ? (
              <div className="spinner" id="spinner"></div>
            ) : (
              "Pay Now"
            )}
          </span>
        </button>

        {error && (
          <div className="card-error" role="alert">
            {error}
          </div>
        )}

        <p
          className={succeeded ? "result-message" : "result-message hidden"}
          // CAUTION: what is "hidden" ? what's its code ?
        >
          Payment succeeded ,see the result in your{" "}
          <a
            href={`https://dashboard.stripe.com/test/payments`}
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Stripe dashboard
          </a>
          Refresh the page again
        </p>
      </form>
    </div>
  );
}

//--------------------------------------------------
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

export default function StripeCheckout() {
  return (
    <StripeCheckoutWrapper>
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </StripeCheckoutWrapper>
  );
}
