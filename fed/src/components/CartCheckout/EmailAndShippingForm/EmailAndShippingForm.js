import React, { useState } from "react";
import useStyles from "./styles";
import { Link } from "react-router-dom";
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
import { useSelector } from "react-redux";

const EmailAndShippingForm = ({ nextstep }) => {
  const user = useSelector((state) => state.auth);
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [email, setEmail] = useState(user.email);
  const [address, setAddress] = useState(user.address_line1);
  const [city, setCity] = useState(user.city);
  const [state, setState] = useState(""); //add when we add state in backend
  const [zip, setZip] = useState(user.postal_code);
  console.log(firstName, lastName, address, city, state);
  const classes = useStyles();
  return (
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

          <div>
            <TextField
              type='text'
              label='Email'
              variant='standard'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
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
          <div style={{ marginBottom: "20px" }}>
            <AddressForm
              setFirstName={setFirstName}
              setLastName={setLastName}
              setAddress={setAddress}
              setCity={setCity}
              setState={setState}
              setZip={setZip}
              firstName={firstName}
              lastName={lastName}
              address={address}
              city={city}
              state={state}
              zip={zip}
            />
          </div>

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
            className={classes.nextButton}
            onClick={() => nextstep()}
            disabled={
              !email ||
              !firstName ||
              !lastName ||
              !address ||
              !city ||
              !state ||
              !zip
            }
          >
            Next
          </Button>
        </CardContent>
      </Card>
    </>
  );
};

export default EmailAndShippingForm;
