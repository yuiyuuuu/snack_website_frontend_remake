import React, { useEffect, useState } from "react";
import { logout } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { me } from "../../store";

const MyAccount = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const userId = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(true);

  const handleLogout = () => {
    dispatch(logout());
  };

  useEffect(() => {
    dispatch(me());
    setLoading(false);
  }, []);

  if (loading) return "";
  if (!userId.id) history.push("/login");
  return <div onClick={() => dispatch(logout())}>logout</div>;
};

export default MyAccount;
