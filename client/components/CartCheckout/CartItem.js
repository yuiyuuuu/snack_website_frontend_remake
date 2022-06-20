import * as React from 'react';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from '@mui/material';
import { Remove, Add, RemoveShoppingCart } from '@material-ui/icons';

const CartItem = ({ itemInfo }) => {
  //Gets product info from props drilled down from cart component
  console.log(itemInfo);

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
            {itemInfo.name}
          </Typography>
          <Typography
            variant='subtitle1'
            color='text.secondary'
            component='div'
          >
            CAT HERE
          </Typography>
          <Typography component='div' variant='h6'>
            ${itemInfo.price}
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <IconButton>
            <Remove />
          </IconButton>
          {/* Returning qty in shopping session table, currently showing 100pcs*/}
          {/* Qty: {itemInfo.quantity} */}
          <IconButton>
            <Add />
          </IconButton>
          <IconButton>
            <RemoveShoppingCart />
          </IconButton>
        </Box>
      </Box>
      <CardMedia
        component='img'
        sx={{ width: 200, objectFit: 'contain' }}
        image={itemInfo.photoURL}
      />
    </Card>
  );
};

export default CartItem;
