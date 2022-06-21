//READ!!! this page will contain all the info for final order submission, including email, address, and payment info **MOST LIKELY**
//ADDRESS FORM and payment form will be in different files

import React, { useState, useEffect } from "react";
import Axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  Stepper,
  Step,
  StepLabel,
  TextField,
  Input,
} from "@material-ui/core";
import EmailIcon from "@material-ui/icons/Email";
import HomeIcon from "@material-ui/icons/Home";
import PaymentIcon from "@material-ui/icons/Payment";
import LockIcon from "@material-ui/icons/Lock";
import AddressForm from "../AddressForm/AddressForm";
import { Link } from "react-router-dom";
import useStyles from "./styles";
import PaymentForm from "./PaymentForm/PaymentForm";
import NoCartItemPage from "../NoCartItemPage";
import { useSelector } from "react-redux";
import EmailAndShippingForm from "../EmailAndShippingForm/EmailAndShippingForm";
import CartItemCheckOut from "./CartItemCheckOut";

import { Elements, CardElement } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe(
  "pk_test_51L9yoAIILTUpIrN8iTUzIA9WvtgWwbV5m2v7MhzzemIV0oe5M5ZAfh2k6woPHKYGHSZyh0KLt89LOYFzhQwxInuT00mqP6sYUSpk_test_51L9yoAIILTUpIrN8iTUzIA9WvtgWwbV5m2v7MhzzemIV0oe5M5ZAfh2k6woPHKYGHSZyh0KLt89LOYFzhQwxInuT00mqP6sYUS"
);

const placeHolderSubtotal = 26.94;

export default function Checkout() {
  const classes = useStyles();

  const [activeStep, setActiveStep] = useState(0);
  const steps = ["Shipping Information", "Payment Details", "Confirmation"];

  const [clientSecret, setClientSecret] = useState("");

  const cart = useSelector((state) => state.cartReducer);
  console.log("clientsecret:", clientSecret);

  let total;
  if (cart.length !== 0) {
    total = cart
      .map((item) => item.quantity * Number(item.product.price))
      .reduce((prev, curr) => prev + curr)
      .toFixed(2);
  }

  //adds one step to move to from address form to payment form or payment form to confirmation page
  function nextstep() {
    setActiveStep(activeStep + 1);
  }

  //back one step
  function backstep() {
    setActiveStep(activeStep - 1);
  }

  useEffect(() => {
    console.log("rannnnnnnn");

    fetch("/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: cart }),
    })
      .then((res) => {
        console.log("res RAN", res);
        res.json();
      })
      .then((data) => {
        console.log("data RAN", data);
        setClientSecret(data.clientSecret);
      });
  }, []);

  const options = {
    clientSecret,
  };

  //RETURN BEGINS HERE
  return (
    <div className={classes.root}>
      {cart.length === 0 ? (
        <NoCartItemPage />
      ) : activeStep === 0 ? (
        <>
          <div className={classes.stepperDiv}>
            <Stepper activeStep={activeStep} className={classes.stepper}>
              {steps.map((step) => (
                <Step key={step}>
                  <StepLabel>{step}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </div>
          <div className={classes.root2}>
            <div className={classes.columnCard}>
              <EmailAndShippingForm nextstep={nextstep} />
            </div>
            <div className={classes.columnCard}>
              <div className={classes.rightCard}>
                <Card className={classes.topRight}>
                  <CardContent>
                    <Typography
                      className={classes.title}
                      color='textSecondary'
                      gutterBottom
                    >
                      Your cart
                    </Typography>
                    <Typography variant='body2' component='p'>
                      {cart.map((cartItem) => {
                        return <CartItemCheckOut itemInfo={cartItem} />;
                      })}
                    </Typography>
                  </CardContent>
                </Card>

                <Card className={classes.bottomRight}>
                  <CardContent>
                    <Typography
                      className={classes.title}
                      color='textSecondary'
                      gutterBottom
                    >
                      Total:
                    </Typography>
                  </CardContent>
                  <CardContent>
                    <Typography variant='body2' component='p'>
                      ${total}
                    </Typography>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </>
      ) : activeStep === 1 ? (
        <>
          <div className={classes.stepperDiv}>
            <Stepper activeStep={activeStep} className={classes.stepper}>
              {steps.map((step) => (
                <Step key={step}>
                  <StepLabel>{step}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </div>
          <div className={classes.root2}>
            <div className={classes.columnCard}>
              {clientSecret && (
                <Elements stripe={stripePromise} options={options}>
                  <PaymentForm nextStep={nextstep} backstep={backstep} />
                </Elements>
              )}
            </div>
            <div className={classes.columnCard}>
              <div className={classes.rightCard}>
                <Card className={classes.topRight}>
                  <CardContent>
                    <Typography
                      className={classes.title}
                      color='textSecondary'
                      gutterBottom
                    >
                      Your cart
                    </Typography>
                    <Typography variant='body2' component='p'>
                      {cart.map((cartItem) => {
                        return <CartItemCheckOut itemInfo={cartItem} />;
                      })}
                    </Typography>
                  </CardContent>
                </Card>

                <Card className={classes.bottomRight}>
                  <CardContent>
                    <Typography
                      className={classes.title}
                      color='textSecondary'
                      gutterBottom
                    >
                      Total:
                    </Typography>
                  </CardContent>
                  <CardContent>
                    <Typography variant='body2' component='p'>
                      ${total}
                    </Typography>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div>confirmation</div>
      )}
    </div>
  );
}
