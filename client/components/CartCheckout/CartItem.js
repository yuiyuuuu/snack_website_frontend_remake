import React, { useState, useEffect } from 'react';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from '@mui/material';
import { Remove, Add, RemoveShoppingCart } from '@material-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCartItem, updateCart } from '../../store/cart';

const CartItem = ({ itemInfo }) => {
  const dispatch = useDispatch();

  if (itemInfo.quantity === 0) {
    dispatch(deleteCartItem(itemInfo.id));
  }

  return (
    <Card
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '25px',
        margin: '20px',
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component='div' variant='h5'>
            {itemInfo.product.name}
          </Typography>
          <Typography
            variant='subtitle1'
            color='text.secondary'
            component='div'
          >
            CAT HERE
          </Typography>
          <Typography component='div' variant='h6'>
            ${itemInfo.product.price}
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <IconButton>
            <Remove
              onClick={() =>
                dispatch(
                  updateCart({
                    ...itemInfo,
                    quantity: (itemInfo.quantity -= 1),
                  })
                )
              }
            />
          </IconButton>
          Qty: {itemInfo.quantity}
          <IconButton>
            <Add
              onClick={() =>
                dispatch(
                  updateCart({
                    ...itemInfo,
                    quantity: (itemInfo.quantity += 1),
                  })
                )
              }
            />
          </IconButton>
          <IconButton>
            <RemoveShoppingCart
              onClick={() => dispatch(deleteCartItem(itemInfo.id))}
            />
          </IconButton>
        </Box>
      </Box>
      <CardMedia
        component='img'
        sx={{ width: 200, objectFit: 'contain' }}
        image={itemInfo.product.photoURL}
      />
    </Card>
  );
};

export default CartItem;
