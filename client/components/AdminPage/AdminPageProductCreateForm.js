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
import { _createProduct } from '../../store/Snacks';

export default function AdminPageProductCreateForm() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [photoURL, setPhotoURL] = useState('');
  const [productCategoryId, setProductCategoryId] = useState('');

  const dispatch = useDispatch();
  const history = useHistory();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const hanldeClick = (e) => {
    e.preventDefault();
    const newSnack = {
      name,
      desc,
      price,
      quantity,
      photoURL,
      productCategoryId,
    };
    dispatch(_createProduct(newSnack));
    history.push('/adminpage');
    handleClose();
  };

  return (
    <div>
      <Button variant='outlined' onClick={handleClickOpen}>
        Add a new Product
      </Button>
      <Dialog open={open} onClose={handleClose} maxWidth='xl'>
        <DialogTitle>Add a product</DialogTitle>
        <DialogContent>
          <DialogContentText>Please fill the form!</DialogContentText>
          <TextField
            autoFocus
            margin='dense'
            id='name'
            label='Name'
            value={name}
            fullWidth
            variant='standard'
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            autoFocus
            margin='dense'
            id='desc'
            label='Description'
            value={desc}
            fullWidth
            variant='standard'
            onChange={(e) => setDesc(e.target.value)}
          />
          <TextField
            autoFocus
            margin='dense'
            id='price'
            label='Price'
            value={price}
            fullWidth
            variant='standard'
            onChange={(e) => setPrice(e.target.value)}
          />
          <TextField
            autoFocus
            margin='dense'
            id='quantity'
            label='Quantity'
            value={quantity}
            fullWidth
            variant='standard'
            onChange={(e) => setQuantity(e.target.value)}
          />
          <TextField
            autoFocus
            margin='dense'
            id='photoUrl'
            label='PhotoURL'
            value={photoURL}
            fullWidth
            variant='standard'
            onChange={(e) => setPhotoURL(e.target.value)}
          />
          <TextField
            autoFocus
            margin='dense'
            id='productCategoryId'
            label='Product Category'
            value={productCategoryId}
            fullWidth
            variant='standard'
            onChange={(e) => setProductCategoryId(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={hanldeClick}>Create</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
