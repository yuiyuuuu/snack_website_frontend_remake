import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import useStyles from './styles';
import {
  Typography,
  Grid,
  TextField,
  Container,
  Button,
  Box,
} from '@material-ui/core';
import { _updateUser } from '../../store';

export default function Profile() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => state.auth);

  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [email, setEmail] = useState(user.email);
  const [address1, setAddress1] = useState(user.address_line1);
  const [address2, setAddress2] = useState(user.address_line2);
  const [city, setCity] = useState(user.city);
  const [country, setCountry] = useState(user.country);
  const [postal, setPostal] = useState(user.postal_code);
  const [telephone, setTelephone] = useState(user.telephone);

  const handleSubmit = (e) => {
    e.preventDefault();
    const prof = {
      id: user.id,
      firstName,
      lastName,
      email,
      address_line1: address1,
      address_line2: address2,
      city,
      country,
      postal_code: postal,
      telephone,
    };
    try {
      dispatch(_updateUser(prof));
      history.push('/');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container maxWidth='sm'>
      <Box component='form' onSubmit={handleSubmit}>
        <Typography>First Name</Typography>
        <TextField
          variant='outlined'
          fullWidth
          id='first-name'
          name='first-name'
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <Typography>Last Name</Typography>
        <TextField
          variant='outlined'
          fullWidth
          id='last-name'
          name='last-name'
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <Typography>Email</Typography>
        <TextField
          variant='outlined'
          fullWidth
          id='email'
          name='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Typography>Address Line 1</Typography>
        <TextField
          variant='outlined'
          fullWidth
          id='address1'
          name='address1'
          value={address1}
          onChange={(e) => setAddress1(e.target.value)}
        />
        <Typography>Address Line 2</Typography>
        <TextField
          variant='outlined'
          fullWidth
          id='address2'
          name='address2'
          value={address2}
          onChange={(e) => setAddress2(e.target.value)}
        />
        <Typography>City</Typography>
        <TextField
          variant='outlined'
          fullWidth
          id='city'
          name='city'
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <Typography>Country</Typography>
        <TextField
          variant='outlined'
          fullWidth
          id='country'
          name='country'
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
        <Typography>Postal Code</Typography>
        <TextField
          variant='outlined'
          fullWidth
          id='postal'
          name='postal'
          value={postal}
          onChange={(e) => setPostal(e.target.value)}
        />
        <Typography>Telephone</Typography>
        <TextField
          variant='outlined'
          fullWidth
          id='telephone'
          name='telephone'
          value={telephone}
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
