import React, { useState, useEffect, useRef, forwardRef } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
  Typography,
} from '@mui/material';
import { ShoppingCart, CreditCard } from '@material-ui/icons';
import { Badge } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import CartItem from './CartItem';

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

const useStyles = makeStyles(() => ({
  dialogPaper: {
    height: '100%',
    width: '40%',
  },
}));

const Shoppingcart = () => {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState('paper');
  const history = useHistory();
  const classes = useStyles();

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClick = () => {
    history.push('/checkout');
    handleClose();
  };

  const descriptionElementRef = useRef(null);
  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <div>
      <Badge
        badgeContent={4}
        showZero
        color='primary'
        onClick={handleClickOpen('paper')}
      >
        <ShoppingCart />
      </Badge>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        TransitionComponent={Transition}
        aria-labelledby='scroll-dialog-title'
        aria-describedby='scroll-dialog-description'
        PaperProps={{ sx: { position: 'fixed', right: 20, m: 0 } }}
        classes={{ paper: classes.dialogPaper }}
      >
        <DialogTitle size='lg' id='scroll-dialog-title'>
          Shopping-Cart
        </DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
          <DialogContentText
            id='scroll-dialog-description'
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            {/* this is where our products go ! */}
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ justifyContent: 'space-between' }}>
          <Typography component='div' variant='h6' sx={{ margin: '10px' }}>
            Subtotal: $99
          </Typography>
          <Button
            variant='contained'
            color='success'
            startIcon={<CreditCard />}
            onClick={handleClick}
          >
            Checkout
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Shoppingcart;
