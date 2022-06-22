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
import { _deleteProduct } from '../../store/Snacks';
import { _updateProduct } from '../../store/Snacks';

export default function AdminPageProductEditForm({ snack }) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState(snack.name);
  const [desc, setDesc] = useState(snack.desc);
  const [price, setPrice] = useState(snack.price);
  const [quantity, setQuantity] = useState(snack.quantity);
  const [photoURL, setPhotoURL] = useState(snack.photoURL);
  const [productCategoryId, setProductCategoryId] = useState(
    snack.productCategoryId
  );

  const dispatch = useDispatch();
  const history = useHistory();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = (id) => {
    dispatch(_deleteProduct(id));
    history.push('/adminpage');
    handleClose();
  };

  const hanldeClick = (e) => {
    e.preventDefault();
    const updatedSnack = {
      id: snack.id,
      name,
      desc,
      price,
      quantity,
      photoURL,
      productCategoryId,
    };
    dispatch(_updateProduct(updatedSnack));
    history.push('/adminpage');
    handleClose();
  };

  return (
    <div>
      <Button variant='outlined' onClick={handleClickOpen}>
        Edit
      </Button>
      <Dialog open={open} onClose={handleClose} maxWidth='xl'>
        <DialogTitle>Edit a product</DialogTitle>
        <DialogContent>
          <DialogContentText>Please edit the form!</DialogContentText>
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
          <Button
            onClick={() => {
              handleDelete(snack.id);
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
