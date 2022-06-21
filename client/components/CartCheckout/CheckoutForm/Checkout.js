//READ!!! this page will contain all the info for final order submission, including email, address, and payment info **MOST LIKELY**
//ADDRESS FORM and payment form will be in different files

import React, { useState, useEffect } from 'react';
import Axios from 'axios';
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
import { useSelector, useDispatch } from 'react-redux';
import EmailAndShippingForm from '../EmailAndShippingForm/EmailAndShippingForm';
import CartItemCheckOut from './CartItemCheckOut';
import { useHistory } from 'react-router-dom';

import { Elements, CardElement } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import {
  _createOrderDetail,
  _createOrderItem,
  _updateProductQuantity,
  _deleteCartItem,
  _deleteShoppingSession,
  _createshoppingSession,
} from '../../../store/checkout';

const stripePromise = loadStripe(
  'pk_test_51L9yoAIILTUpIrN8iTUzIA9WvtgWwbV5m2v7MhzzemIV0oe5M5ZAfh2k6woPHKYGHSZyh0KLt89LOYFzhQwxInuT00mqP6sYUSpk_test_51L9yoAIILTUpIrN8iTUzIA9WvtgWwbV5m2v7MhzzemIV0oe5M5ZAfh2k6woPHKYGHSZyh0KLt89LOYFzhQwxInuT00mqP6sYUS'
);

export default function Checkout() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const [activeStep, setActiveStep] = useState(0);
  const steps = ['Shipping Information', 'Payment Details', 'Confirmation'];

  const [clientSecret, setClientSecret] = useState('');

  const cart = useSelector((state) => state.cartReducer);
  const user = useSelector((state) => state.auth);

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
    if (cart.length === 0) return;
    fetch('/create-payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ items: cart }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  const options = {
    clientSecret,
  };

  function refreshPage() {
    window.location.reload(false);
  }

  // HANDLE CHECKOUT
  const handleCheckout = async () => {
    // create new order detail
    const detailTotal = { userId: user.id, total: Number(total) };
    await dispatch(_createOrderDetail(detailTotal));

    // create new order items
    await cart.map((item) => {
      const obj = {
        itemId: item.product.id,
        userId: user.id,
        quantity: item.quantity,
      };
      return dispatch(_createOrderItem(obj));
    });

    // update product quantities
    await cart.map((item) => {
      let { product } = item;
      const currentQty = product.quantity;
      const updatedQty = currentQty - item.quantity;
      product = { ...product, quantity: updatedQty };
      return dispatch(_updateProductQuantity(product));
    });

    // delete cart item
    await cart.map((item) => {
      return dispatch(_deleteCartItem(item.id));
    });
    // refreshPage();

    // delete shopping session
    await dispatch(_deleteShoppingSession(cart[0].shoppingSessionId));

    // // create shopping session
    await dispatch(_createshoppingSession(user.id));

    nextstep();
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
                    <Typography variant='body2'>
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
                    <Typography variant='body2'>${total}</Typography>
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
              {/* {clientSecret && (
                <Elements stripe={stripePromise} options={options}>
                  <PaymentForm nextStep={nextstep} backstep={backstep} />
                </Elements>
              )} */}
              <Card>
                <CardContent>
                  {/* <Payment /> */}
                  <Typography className={classes.title}>
                    Payment Information
                  </Typography>
                  <div style={{ padding: '20px' }}>
                    <form>{/* <PaymentElement /> */}</form>
                    <br />
                    <br />
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                      }}
                    >
                      <Button variant='outlined' onClick={() => backstep()}>
                        Back
                      </Button>
                      <Button
                        variant='contained'
                        // disabled={!stripe || !elements || isLoading}
                        color='primary'
                        onClick={() => handleCheckout()}
                      >
                        Pay
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
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
                    <Typography variant='body2'>
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
                    <Typography variant='body2'>${total}</Typography>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </>
      ) : (
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
          <div>YOUR ORDER #123 HAS BEEN CONFIRMED!</div>
        </>
      )}
    </div>
  );
}
