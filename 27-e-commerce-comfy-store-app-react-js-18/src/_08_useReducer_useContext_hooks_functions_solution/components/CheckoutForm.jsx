import { useState, useEffect } from "react";
import {
  PaymentElement,
  //   LinkAuthenticationElement,
  useStripe,
  useElements,
  //   CardElement,
} from "@stripe/react-stripe-js";

//----------------------------------------------------------------
import { useCartContext, useUserContext } from "../context/";
import { priceFormatter } from "./../../utilities/";
import { useNavigate } from "react-router-dom";

//-----------------------------------------------------------------

export default function CheckoutForm(props) {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  const { cart, totalAmount, shippingFee, clearCart } = useCartContext();
  const { myUser } = useUserContext();

  // Stripe
  //   const cardStyle = {
  //     style: {
  //       base: {
  //         color: "#32325d",
  //         fontFamily: "Arial, sans-serif",
  //         fontSmoothing: "antialiased",
  //         fontSize: "16px",
  //         "::placeholder": {
  //           color: "#32325d",
  //         },
  //       },
  //       invalid: {
  //         color: "#fa755a",
  //         iconColor: "#fa755a",
  //       },
  //     },
  //   };

  //   const paymentElementOptions = {
  //     layout: "tabs",
  //   };

  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [disabled, setDisabled] = useState(true);

  const [message, setMessage] = useState(null);

  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret",
    );

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case "succeeded":
          setMessage("Payment succeeded!");
          break;
        case "processing":
          setMessage("Your payment is processing.");
          break;
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.");
          break;
        default:
          setMessage("Something went wrong.");
          break;
      }
    });
  }, [stripe]);

  const handleChange = async (event) => {
    setDisabled(() => event.empty);
    setError(event.error ? event.error.message : "");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setProcessing(true);

    const payload = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: "http://localhost:8888/",
      },
    });

    console.log("payload = ", payload);

    if (
      payload.error &&
      (payload.error.type === "card_error" || error.type === "validation_error")
    ) {
      setMessage(payload.error.message);
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

    setProcessing(false);

    // const payload = await stripe.confirmCardPayment(
    //   props.options.clientSecret,
    //   {
    //     payment_method: {
    //       card: elements.getElement(PaymentElement),
    //     },
    //   },
    // );

    // if (payload.error) {
    //   setError(() => `Payment failed ${payload.error.message}`);
    //   setProcessing(false);
    // } else {
    //   setError(null);
    //   setProcessing(false);
    //   setSucceeded(true);

    //   setTimeout(() => {
    //     clearCart();
    //     navigate("/");
    //   }, 5000);
    // }
  };

  const paymentElementOptions = {
    layout: "tabs",
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
        <PaymentElement id="payment-element" options={paymentElementOptions} />
        <button disabled={processing || !stripe || !elements} id="submit">
          <span id="button-text">
            {processing ? (
              <div className="spinner" id="spinner"></div>
            ) : (
              "Pay Now"
            )}
          </span>
        </button>

        {error && (
          <div className="payment-message" role="alert">
            {error}
          </div>
        )}

        <p
          className={succeeded ? "payment-message" : "payment-message hidden"}
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
