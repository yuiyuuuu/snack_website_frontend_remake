import React from "react";
import { logout } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const MyAccount = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const userId = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
  };

  if (!userId.id) history.push("/login");
  return <div onClick={() => dispatch(logout())}>logout</div>;
};

export default MyAccount;
