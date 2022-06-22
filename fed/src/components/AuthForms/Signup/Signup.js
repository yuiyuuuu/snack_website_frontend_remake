import React, { useState } from 'react';
import useStyles from './stylesSignup';
import {
  Typography,
  Grid,
  TextField,
  Container,
  Button,
  Avatar,
  Box,
} from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { authenticate, error } from '../../../store';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';

const Signup = ({ formName }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [err, setErr] = useState('');

  const { error } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== passwordConfirm) {
      return setErr('Passwords do not match');
    }
    try {
      setErr('');
      dispatch(authenticate(email, password, formName));
      history.push('/');
    } catch (e) {
      setErr('Failed to create an account');
    }
  };

  const classes = useStyles();

  return (
    <Container component='main' maxWidth='xs'>
      <div className={classes.content}>
        <Typography component='h1' variant='h5' className={classes.signuphook}>
          Order in seconds, delivered in 30 minutes or less.
        </Typography>
        <Typography variant='subtitle2' className={classes.underSignUpHook}>
          You sign up. We deliver — fast.
        </Typography>
        <Box component='form' className={classes.form} onSubmit={handleSubmit}>
          {err && <Alert color='error'>{err}</Alert>}
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant='outlined'
                required
                fullWidth
                id='email'
                label='Email Address'
                name='email'
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant='outlined'
                required
                fullWidth
                name='password'
                label='Password'
                type='password'
                id='password'
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant='outlined'
                required
                fullWidth
                name='password-confirm'
                label='Password Confirmation'
                type='password'
                id='password-confirm'
                onChange={(e) => setPasswordConfirm(e.target.value)}
              />
            </Grid>

            {email && passwordConfirm ? (
              <Button
                type='submit'
                className={classes.button}
                fullWidth
                variant='contained'
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
            ) : (
              <Button
                type='submit'
                className={classes.buttonNoComplete}
                fullWidth
                variant='contained'
                sx={{ mt: 3, mb: 2 }}
                disabled
              >
                Sign Up
              </Button>
            )}
          </Grid>
          <Grid container justifyContent='center'>
            <Grid item>
              <Link to='/login' variant='body2'>
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </div>
    </Container>
  );
};

export default Signup;
