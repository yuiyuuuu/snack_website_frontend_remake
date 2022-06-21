import React from "react";
import { Card, CardContent, Typography, Button } from "@material-ui/core";
import {
  Elements,
  CardElement,
  ElementsConsumer,
} from "@stripe/react-stripe-js";

import { Payment } from "@material-ui/icons";
import useStyles from "./styles";
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const PaymentForm = ({ backstep, nextstep }) => {
  const classes = useStyles();
  console.log("process:", stripePromise);

  return (
    // <>
    //   <Card>
    //     <CardContent>
    //       <Payment />
    //       <Typography className={classes.title}>Payment Information</Typography>
    //       <Elements stripe={stripePromise}>
    //         <form>
    //           <CardElement />

    //         </form>
    //       </Elements>
    //     </CardContent>
    //   </Card>
    // </>
    <>
      <Card>
        <CardContent>
          <Payment />
          <Typography className={classes.title}>Payment Information</Typography>
          <Elements stripe={stripePromise}>
            <ElementsConsumer>
              {({ elements, stripe }) => (
                <div style={{ padding: "20px" }}>
                  <CardElement />

                  <br />
                  <br />
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Button variant='outlined' onClick={() => backstep()}>
                      Back
                    </Button>
                    <Button
                      type='submit'
                      variant='contained'
                      // disabled={!stripe}
                      color='primary'
                    >
                      Pay
                    </Button>
                  </div>
                </div>
              )}
            </ElementsConsumer>
          </Elements>
        </CardContent>
      </Card>
    </>
  );
};

export default PaymentForm;

/* <ElementsConsumer>
              {({ elements, stripe }) => {
              }}
              </ElementsConsumer>
              */
