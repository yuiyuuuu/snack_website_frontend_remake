//READ!!! this page will contain all the info for final order submission, including email, address, and payment info **MOST LIKELY**
//ADDRESS FORM and payment form will be in different files

import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
} from '@material-ui/core';
import EmailIcon from '@material-ui/icons/Email';
import HomeIcon from '@material-ui/icons/Home';
import PaymentIcon from '@material-ui/icons/Payment';
import LockIcon from '@material-ui/icons/Lock';
import AddressForm from '../AddressForm/AddressForm';
import { Link } from 'react-router-dom';
import useStyles from './styles';
import PaymentForm from './PaymentForm/PaymentForm';
import NoCartItemPage from '../NoCartItemPage';
import { useSelector } from 'react-redux';
import EmailAndShippingForm from '../EmailAndShippingForm/EmailAndShippingForm';
import CartItemCheckOut from './CartItemCheckOut';

const placeHolderSubtotal = 26.94;

export default function Checkout() {
  const classes = useStyles();

  const [activeStep, setActiveStep] = useState(0);
  const steps = ['Shipping Information', 'Payment Details', 'Confirmation'];

  //THIS IS WHERE ALL THE SHIPPING INFORMATION IS STORED, EACH HAS THEIR OWN STATE
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [address, setAddress] = useState("");
  // const [city, setCity] = useState("");
  // const [state, setState] = useState("");
  // const [zip, setZip] = useState("");
  // console.log(firstName);

  const cart = useSelector((state) => state.cartReducer);
  let total;
  if (cart) {
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
              <PaymentForm nextStep={nextstep} backstep={backstep} />
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
