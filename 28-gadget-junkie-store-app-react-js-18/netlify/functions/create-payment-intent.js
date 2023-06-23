// domain/.netlify/functions/create-payment-intent

require("dotenv").config();
const stripe = require("stripe")(process.env.REACT_APP_STRIPE_SK);

exports.handler = async function (event, context) {
  // console.log("event = ", event);

  if (event.body) {
    const { cart, shippingFee } = JSON.parse(event.body);

    const calculateOrderAmount = (receivedCartItems) => {
      let totalAmount = 0;
      receivedCartItems.map(
        (item) => (totalAmount += item.price * item.amount),
      );
      return totalAmount + shippingFee;
    };

    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: calculateOrderAmount(cart),
        currency: "eur",
      });

      return {
        statusCode: 200,
        body: JSON.stringify({
          paymentIntent, // optional: for learning purpose
          clientSecret: paymentIntent.client_secret,
        }),
      };
    } catch (error) {
      console.log(error);
      return {
        statusCode: 500,
        body: JSON.stringify({ message: error.message }),
      };
    }
  } else {
    return {
      statusCode: 200,
      body: "create payment intent",
    };
  }
};
