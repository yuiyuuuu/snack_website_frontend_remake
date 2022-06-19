import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import { Edit } from '@material-ui/icons';
import { _updateUser } from '../../store';
import { _deleteUser } from '../../store';

export default function AdminPageUserEditForm({ user }) {
  const [open, setOpen] = useState(false);
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [email, setEmail] = useState(user.email);
  const [address1, setAddress1] = useState(user.address_line1);
  const [address2, setAddress2] = useState(user.address_line2);
  const [city, setCity] = useState(user.city);
  const [country, setCountry] = useState(user.country);
  const [postal, setPostal] = useState(user.postal_code);
  const [telephone, setTelephone] = useState(user.telephone);

  const dispatch = useDispatch();
  const history = useHistory();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = (id) => {
    dispatch(_deleteUser(id));
    history.push('/adminpage');
    handleClose();
  };

  const hanldeClick = (e) => {
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
    dispatch(_updateUser(prof));
    history.push('/adminpage');
    handleClose();
  };

  return (
    <div>
      <Edit variant='outlined' onClick={handleClickOpen} />
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit a user</DialogTitle>
        <DialogContent>
          <DialogContentText>Please edit the form!</DialogContentText>
          <TextField
            autoFocus
            margin='dense'
            id='First Name'
            label='First Name'
            value={firstName}
            fullWidth
            variant='standard'
            onChange={(e) => setFirstName(e.target.value)}
          />
          <TextField
            autoFocus
            margin='dense'
            id='name'
            label='Last Name'
            value={lastName}
            fullWidth
            variant='standard'
            onChange={(e) => setLastName(e.target.value)}
          />
          <TextField
            autoFocus
            margin='dense'
            id='Email'
            label='Email'
            value={email}
            fullWidth
            variant='standard'
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            autoFocus
            margin='dense'
            id='Address Line 1'
            label='Address Line 1'
            value={address1}
            fullWidth
            variant='standard'
            onChange={(e) => setAddress1(e.target.value)}
          />
          <TextField
            autoFocus
            margin='dense'
            id='Address Line 2'
            label='Address Line 2'
            value={address2}
            fullWidth
            variant='standard'
            onChange={(e) => setAddress2(e.target.value)}
          />
          <TextField
            autoFocus
            margin='dense'
            id='City'
            label='City'
            value={city}
            fullWidth
            variant='standard'
            onChange={(e) => setCity(e.target.value)}
          />
          <TextField
            autoFocus
            margin='dense'
            id='Country'
            label='Country'
            value={country}
            fullWidth
            variant='standard'
            onChange={(e) => setCountry(e.target.value)}
          />
          <TextField
            autoFocus
            margin='dense'
            id='Postal-Code'
            label='Postal-Code'
            value={postal}
            fullWidth
            variant='standard'
            onChange={(e) => setPostal(e.target.value)}
          />
          <TextField
            autoFocus
            margin='dense'
            id='Telephone'
            label='Telephone'
            value={telephone}
            fullWidth
            variant='standard'
            onChange={(e) => setTelephone(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              handleDelete(user.id);
            }}
          >
            Delete
          </Button>
          <Button onClick={hanldeClick}>Update</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
