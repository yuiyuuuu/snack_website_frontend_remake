import React from "react";
import { logout } from "../../store";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const MyAccount = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogout = () => {
    dispatch(logout());
  };

  return <div onClick={() => dispatch(logout())}>logout</div>;
};

export default MyAccount;
