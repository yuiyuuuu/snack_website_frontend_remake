import React from 'react';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from '@mui/material';

const CartItemCheckOut = ({ itemInfo }) => {
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
          <Typography component='div' variant='h6'>
            {itemInfo.product.name}
          </Typography>
          <Typography component='div' variant='text'>
            ${itemInfo.product.price}
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          Qty: {itemInfo.quantity}
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

export default CartItemCheckOut;
