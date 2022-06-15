import React from "react";
import { useDispatch, useSelector } from "react-redux";
import useStyles from "./styles";
import { logout } from "../../store";

const MyAccount = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <div className={classes.content}>
      <a href="#" onClick={() => dispatch(logout())}>
        Logout
      </a>
    </div>
  );
};

export default MyAccount;
