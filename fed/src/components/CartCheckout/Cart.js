import React, { useState, useEffect, useRef, forwardRef } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
  Typography,
} from "@mui/material";
import { ShoppingCart, CreditCard } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { fetchAUser } from "../../store";
import { fetchCart } from "../../store/cart";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

const useStyles = makeStyles(() => ({
  dialogPaper: {
    height: "100%",
    width: "40%",
  },
}));

//TO DO FOR TOMORROW, WE HAVE TO FETCH THE CURRENT ITEMS IN THE CART FROM A CERTAIN SESSION AND PUSH IT TO REDUX.
const Shoppingcart = () => {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState("paper");
  const [total, setTotal] = useState(0);
  const [badge, setBadge] = useState(0);
  const history = useHistory();
  const classes = useStyles();
  const dispatch = useDispatch();

  const userId = useSelector((state) => state.auth);
  const user = useSelector((state) => state.user);
  const shopping_session = useSelector((state) => state.user.shopping_session);
  const { cartReducer } = useSelector((state) => state);

  useEffect(() => {
    if (userId) {
      dispatch(fetchCart(userId.id));
    }
  }, [userId.id]);

  useEffect(() => {
    if (cartReducer) {
      setBadge(cartReducer.length);
      if (cartReducer.length > 0) {
        const cartReducerPrices = cartReducer.map(
          (item) => item.quantity * Number(item.product.price)
        );
        setTotal(
          cartReducerPrices.reduce((prev, curr) => prev + curr).toFixed(2)
        );
      }
    }
  }, [cartReducer]);

  useEffect(() => {
    const fetchUser = () => {
      if (!userId) return;
      dispatch(fetchAUser(userId.id)); //user with shopping id
    };
    fetchUser();
  }, [userId]);

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClick = () => {
    history.push("/checkout");
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
        badgeContent={badge}
        showZero
        color='primary'
        onClick={handleClickOpen("paper")}
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
        PaperProps={{ sx: { position: "fixed", right: 20, m: 0 } }}
        classes={{ paper: classes.dialogPaper }}
      >
        <DialogTitle size='lg' id='scroll-dialog-title'>
          Shopping Cart
        </DialogTitle>
        <DialogContent dividers={scroll === "paper"}>
          <DialogContentText
            id='scroll-dialog-description'
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            {/* this is where our products go ! */}
            {cartReducer.map((cartItem) => {
              return <CartItem itemInfo={cartItem} key={cartItem.id} />;
            })}
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ justifyContent: "space-between" }}>
          <Typography component='div' variant='h6' sx={{ margin: "10px" }}>
            {`Total: $${total}`}
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
