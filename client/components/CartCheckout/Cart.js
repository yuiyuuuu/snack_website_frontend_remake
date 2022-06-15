import React from "react";
import useStyles from "./CartStyles";

const Cart = () => {
  const classes = useStyles();
  return <div className={classes.content}>Cart</div>;
};

export default Cart;
