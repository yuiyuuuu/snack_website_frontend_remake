import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useStyles from './styles';
import {
  Typography,
  Grid,
  TextField,
  Container,
  Button,
  Box,
} from '@material-ui/core';

export default function Profile() {
  const classes = useStyles();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [postal, setPostal] = useState('');
  const [telephone, setTelephone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Container className={classes.content} maxWidth='s'>
      <Box component='form' onSubmit={handleSubmit}>
        <Typography>First Name</Typography>
        <TextField
          variant='outlined'
          fullWidth
          id='first-name'
          name='first-name'
          onChange={(e) => setFirstName(e.target.value)}
        />
        <Typography>Last Name</Typography>
        <TextField
          variant='outlined'
          fullWidth
          id='last-name'
          name='last-name'
          onChange={(e) => setLastName(e.target.value)}
        />
        <Typography>Email</Typography>
        <TextField
          variant='outlined'
          fullWidth
          id='email'
          name='email'
          onChange={(e) => setEmail(e.target.value)}
        />
        <Typography>Address Line 1</Typography>
        <TextField
          variant='outlined'
          fullWidth
          id='address1'
          name='address1'
          onChange={(e) => setAddress1(e.target.value)}
        />
        <Typography>Address Line 2</Typography>
        <TextField
          variant='outlined'
          fullWidth
          id='address2'
          name='faddress2'
          onChange={(e) => setAddress2(e.target.value)}
        />
        <Typography>City</Typography>
        <TextField
          variant='outlined'
          fullWidth
          id='city'
          name='city'
          onChange={(e) => setCity(e.target.value)}
        />
        <Typography>Country</Typography>
        <TextField
          variant='outlined'
          fullWidth
          id='country'
          name='country'
          onChange={(e) => setCountry(e.target.value)}
        />
        <Typography>Postal Code</Typography>
        <TextField
          variant='outlined'
          fullWidth
          id='postal'
          name='postal'
          onChange={(e) => setPostal(e.target.value)}
        />
        <Typography>Telephone</Typography>
        <TextField
          variant='outlined'
          fullWidth
          id='telephone'
          name='telephone'
          onChange={(e) => setTelephone(e.target.value)}
        />
        <Button
          type='submit'
          className={classes.button}
          fullWidth
          variant='contained'
          sx={{ mt: 3, mb: 2 }}
        >
          Save
        </Button>
      </Box>
    </Container>
  );
}
