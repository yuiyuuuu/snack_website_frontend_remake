import React, { useEffect, useState } from "react";
import { fetchOrders, logout } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { me } from "../../store";
import "./myaccount.css";
import Navbar from "../Navbar/Navbar";
import OrderHistory from "./OrderHistory";

const MyAccount = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const userId = useSelector((state) => state.auth);
  const unsortorders = useSelector((state) => state.orders);

  const [loading, setLoading] = useState(true);

  const sorting = (a, b) => {
    if (a.id > b.id) return 1;
    if (b.id > a.id) return -1;
    return 0;
  };
  const orders = unsortorders.sort(sorting);
  const [step, setStep] = useState(0);

  const handleLogout = () => {
    dispatch(logout());
  };

  useEffect(() => {
    dispatch(me());
    setLoading(false);
  }, []);

  useEffect(() => {
    dispatch(fetchOrders(userId.id));
  }, [userId]);

  console.log(orders);
  if (loading) return "";
  if (!userId.id) history.push("/login");
  return (
    <div>
      <Navbar />
      <div className='parent-myaccount'>
        <div className='left-myaccount'>
          <div
            className='myaccount-tab'
            style={{
              color: step === 0 ? "black" : "gainsboro",
              textDecoration: step === 0 ? "underline" : "none",
            }}
            onClick={() => setStep(0)}
          >
            Order History
          </div>
          <div
            className='myaccount-tab'
            style={{
              color: step === 1 ? "black" : "gainsboro",
              textDecoration: step === 1 ? "underline" : "none",
            }}
            onClick={() => setStep(1)}
          >
            Account Details
          </div>
          <div
            className='myaccount-tab'
            style={{
              color: step === 2 ? "black" : "gainsboro",
              textDecoration: step === 2 ? "underline" : "none",
            }}
            onClick={() => setStep(2)}
          >
            Shipping Addresses
          </div>
          <div
            className='myaccount-tab'
            style={{
              color: step === 3 ? "black" : "gainsboro",
              textDecoration: step === 3 ? "underline" : "none",
            }}
            onClick={() => dispatch(logout())}
          >
            Log Out
          </div>
        </div>
        <div className='right-myaccount'>
          {step === 0 ? <OrderHistory orders={orders} /> : <div>Hello</div>}
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
