import React, { useEffect, useState } from "react";
import { Card, CardContent, Typography, Button } from "@material-ui/core";
import { Elements, CardElement, PaymentElement } from "@stripe/react-stripe-js";

import { Payment } from "@material-ui/icons";
import useStyles from "./styles";
import { loadStripe } from "@stripe/stripe-js";
import { useStripe, useElements } from "@stripe/react-stripe-js";
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const PaymentForm = ({ backstep, nextstep }) => {
  const classes = useStyles();
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  //RETRIEVE PAYMENT INTENT
  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret" //no idea what this does
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: "http://localhost:3000/checkout",
      },
    });

    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.
    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occurred.");
    }

    nextstep(); //go next step in stepper
    setIsLoading(false);
  };

  return (
    <Card>
      <CardContent>
        <Payment />
        <Typography className={classes.title}>Payment Information</Typography>

        <div style={{ padding: "20px" }}>
          <form onSubmit={handleSubmit}>
            <CardElement />
          </form>

          <br />
          <br />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Button variant='outlined' onClick={() => backstep()}>
              Back
            </Button>
            <Button
              type='submit'
              variant='contained'
              disabled={!stripe || !elements || isLoading}
              color='primary'
            >
              Pay
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PaymentForm;

/* <ElementsConsumer>
              {({ elements, stripe }) => {
              }}
              </ElementsConsumer>
              */
