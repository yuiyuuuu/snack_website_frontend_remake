//READ!!! this page will contain all the info for final order submission, including email, address, and payment info **MOST LIKELY**
//ADDRESS FORM and payment form will be in different files

import React, { useState } from "react";
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

const placeHolderSubtotal = 26.94;

export default function Checkout() {
  const classes = useStyles();
  const [hasEmail, setHasEmail] = useState(true); //user email, if they click edit email during checkout we turn this false and show input field to change email and set it back true once they submit
  const [email, setEmail] = useState("yingsonyu@gmail.com"); //hard code email for now, change when we get database stuff. this is the actual email that is going to be in order details
  const [onChangeEmail, setOnChangeEmail] = useState(""); //on change email for text field
  const [activeStep, setActiveStep] = useState(0);
  const steps = ["Shipping Information", "Payment Details", "Confirmation"];

  const cart = useSelector((state) => state.cartReducer);
  console.log("cart:", cart);

  const EmailAndShippingForm = () => (
    <>
      <Card className={classes.leftCard}>
        <CardContent>
          <EmailIcon color='primary' />
          <Typography
            className={classes.title}
            color='textSecondary'
            gutterBottom
          >
            Contact Information
          </Typography>
          {hasEmail === true ? (
            <div>
              <Typography style={{ color: "black" }} gutterBottom>
                {email}
              </Typography>
              <Button onClick={() => setHasEmail(false)}>Change Email</Button>
            </div>
          ) : (
            <div>
              <TextField
                label='Email'
                variant='standard'
                onChange={(e) => setOnChangeEmail(e.target.value)}
              />
              <Button
                onClick={() => {
                  setHasEmail(true), setEmail(onChangeEmail);
                }}
                style={{ marginTop: "20px", marginLeft: "4px" }}
              >
                Submit
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
      <Card className={classes.shippingInfo}>
        <CardContent>
          <HomeIcon color='primary' />
          <Typography
            className={classes.title}
            color='textSecondary'
            gutterBottom
          >
            Shipping Information
          </Typography>
          <Typography variant='body2' component='p'>
            <AddressForm />
          </Typography>
          <Button
            style={{
              float: "left",
              marginTop: "7px",
              backgroundColor: "deepskyblue",
              color: "white",
            }}
            component={Link}
            to='/allsnacks'
          >
            Back
          </Button>

          <Button
            style={{
              float: "right",
              marginTop: "7px",
              backgroundColor: "deepskyblue",
              color: "white",
            }}
          >
            Next
          </Button>
        </CardContent>
      </Card>
    </>
  );

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
              <Emai />
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
                      CART ITEMS WILL GO HERE
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
                      SUBTOTAL:
                    </Typography>
                  </CardContent>
                  <CardContent>
                    <Typography variant='body2' component='p'>
                      ${placeHolderSubtotal}
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
              <PaymentForm />
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
                      CART ITEMS WILL GO HERE
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
                      SUBTOTAL:
                    </Typography>
                  </CardContent>
                  <CardContent>
                    <Typography variant='body2' component='p'>
                      ${placeHolderSubtotal}
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
