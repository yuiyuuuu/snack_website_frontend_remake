import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography, Button } from '@material-ui/core';
import { Elements, CardElement, PaymentElement } from '@stripe/react-stripe-js';
import { Payment } from '@material-ui/icons';
import useStyles from './styles';
import { loadStripe } from '@stripe/stripe-js';
import { useStripe, useElements } from '@stripe/react-stripe-js';
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);
const PaymentForm = ({ backstep, nextstep }) => {
  const classes = useStyles();
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [cardNum, setCardNum] = useState(null);
  const [expDate, setExpDate] = useState(null);
  const [cvv, setCvv] = useState(null);

  const stripe = useStripe();
  const elements = useElements();
  //RETRIEVE PAYMENT INTENT
  useEffect(() => {
    if (!stripe) {
      return;
    }
    const clientSecret = new URLSearchParams(window.location.search).get(
      'payment_intent_client_secret' //no idea what this does
    );
    if (!clientSecret) {
      return;
    }
    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case 'succeeded':
          setMessage('Payment succeeded!');
          break;
        case 'processing':
          setMessage('Your payment is processing.');
          break;
        case 'requires_payment_method':
          setMessage('Your payment was not successful, please try again.');
          break;
        default:
          setMessage('Something went wrong.');
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
        return_url: 'http://localhost:8080/confirmation',
      },
    });
    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.
    if (error.type === 'card_error' || error.type === 'validation_error') {
      setMessage(error.message);
    } else {
      setMessage('An unexpected error occurred.');
    }
    nextstep(); //go next step in stepper
    setIsLoading(false);
  };

  const handleCheckout = () => {
    nextstep();
  };

  return (
    <Card>
      <CardContent>
        <Payment />
        <Typography className={classes.title}>Payment Information</Typography>
        <div style={{ padding: '20px' }}>
          <form onSubmit={handleSubmit}>
            <PaymentElement />
          </form>
          <br />
          <br />
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button variant='outlined' onClick={() => backstep()}>
              Back
            </Button>
            <Button
              variant='contained'
              disabled={!stripe || !elements || isLoading}
              color='primary'
              onClick={() => nextstep()}
            >
              Pay
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
  // return (
  //   <form id='payment-form' onSubmit={handleSubmit}>
  //     <CardElement id='payment-element' />

  //     <button disabled={isLoading || !stripe || !elements} id='submit'>
  //       <span id='button-text'>
  //         {isLoading ? <div className='spinner' id='spinner'></div> : 'Pay now'}
  //       </span>
  //     </button>
  //     {/* Show any error or success messages */}
  //     {message && <div id='payment-message'>{message}</div>}
  //   </form>
  // );
};
export default PaymentForm;

// <form id='payment-element' onSubmit={handleSubmit}>
//   <div id='card-element'>
//     <label>
//       Card #
//       <input
//         id='payment-element'
//         type='text'
//         name='cardNum'
//         value={cardNum}
//         onChange={(e) => setCardNum(e.target.value)}
//       />
//     </label>
//     <label>
//       EXP date
//       <input
//         id='payment-element'
//         type='text'
//         name='expDate'
//         value={expDate}
//         onChange={(e) => setExpDate(e.target.value)}
//       />
//     </label>
//     <label>
//       CCV
//       <input
//         id='payment-element'
//         type='text'
//         name='cvv'
//         value={cvv}
//         onChange={(e) => setCvv(e.target.value)}
//       />
//     </label>
//   </div>
//   <div id='card-errors' role='alert'>
//     {message && <div id='payment-message'>{message}</div>}
//   </div>
//   <button id='submit'>Submit Payment</button>
// </form>
