import React, { useState } from 'react';
import useStyles from '../Signup/stylesSignup';
import { useDispatch, useSelector } from 'react-redux';
import { authenticate, error } from '../../../store';
import { useHistory, Link } from 'react-router-dom';
import {
  Typography,
  Grid,
  TextField,
  Container,
  Button,
  Avatar,
} from '@material-ui/core';

const Login = ({ formName }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const classes = useStyles();

  const { error } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authenticate(email, password, formName));
    history.push('/');
  };

  return (
    <Container component='main' maxWidth='xs'>
      <div className={classes.content}>
        <Typography
          component='h1'
          variant='h5'
          style={{ fontWeight: 'bolder', fontSize: '2em' }}
        >
          Sign In
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
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
            {email && password ? (
              <Button
                type='submit'
                className={classes.button}
                fullWidth
                variant='contained'
              >
                Sign In
              </Button>
            ) : (
              <Button
                type='submit'
                className={classes.buttonNoComplete}
                fullWidth
                variant='contained'
                disabled
              >
                Sign In
              </Button>
            )}
            <Grid container>
              <Grid item xs>
                <Link to='#' style={{ color: 'deepskyblue', fontSize: '12px' }}>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link
                  to='/signup'
                  style={{ color: 'deepskyblue', fontSize: '12px' }}
                >
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default Login;
