import React, { useState } from "react";
import useStyles from "./stylesSignup";
import {
  Typography,
  Grid,
  TextField,
  Container,
  Button,
  Avatar,
} from "@material-ui/core";
import { authenticate, error } from "../../../store";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";

const Signup = ({ formName }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { error } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authenticate(email, password, formName));
    history.push("/");
  };

  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.content}>
        <Typography component="h1" variant="h5" className={classes.signuphook}>
          Order in seconds, delivered in 30 minutes or less.
        </Typography>
        <Typography varaint="subtitle2" className={classes.underSignUpHook}>
          You sign up. We deliver — fast.
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="filled"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>
            {email && password ? (
              <Button
                type="submit"
                className={classes.button}
                fullWidth
                variant="contained"
              >
                Sign Up
              </Button>
            ) : (
              <Button
                type="submit"
                className={classes.buttonNoComplete}
                fullWidth
                variant="contained"
                disabled
              >
                Sign Up
              </Button>
            )}
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default Signup;

/*  if we need this later. form for first name and last name
<Grid item xs={12} sm={6}>
              <TextField
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
              />
            </Grid>
            */
