import React, { useEffect, useState } from "react";
import { fetchOrders, logout } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { me } from "../../store";
import "./myaccount.css";
import Navbar from "../Navbar/Navbar.js";
import OrderHistory from "./OrderHistory";
import Addresses from "./Addresses";
import states from "../Checkout/states";
import { addAnAddress } from "../../store/useraddresses";

const MyAccount = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const userId = useSelector((state) => state.auth);
  const unsortorders = useSelector((state) => state.orders);

  const [loading, setLoading] = useState(true);
  const [showAddForm, setShowAddForm] = useState(false);

  //ADD ADDRESS FORM
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");

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

  const handleAddAddress = (e) => {
    e.preventDefault();
    const addressObj = {
      firstName: firstName,
      lastName: lastName,
      address: address,
      city: city,
      state: state,
      zip: zip,
      userId: userId.id,
    };

    dispatch(addAnAddress(addressObj));
    setShowAddForm(false);
    setFirstName("");
    setLastName("");
    setAddress("");
    setCity("");
    setState("");
    setZip("");
  };

  useEffect(() => {
    dispatch(me());
    setLoading(false);
  }, []);

  useEffect(() => {
    dispatch(fetchOrders(userId.id));
  }, [userId]);

  if (loading) return "";
  if (!userId.id) history.push("/login");
  return (
    <div>
      {/* BEGIN OF ADD ADDRESS FORM*/}
      <div
        style={{
          position: "fixed",
          backgroundColor: "gray",
          width: "100%",
          height: "100%",
          opacity: 0.8,
          display: showAddForm ? "" : "none",
        }}
        onClick={() => {
          setShowAddForm(false);
        }}
      />
      <div
        style={{
          height: "80%",
          width: "35%",
          backgroundColor: "white",
          position: "fixed",
          zIndex: 10,
          top: "14%",
          left: "31%",
          display: showAddForm ? "flex" : "none",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            fontSize: "26px",
            fontFamily: "freemono",
            alignSelf: "center",
            marginTop: "50px",
          }}
        >
          Add Address
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "5%",
            marginRight: "5%",
            marginTop: "30px",
            alignItems: "center",
          }}
        >
          <form
            onSubmit={(e) => handleAddAddress(e)}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                justifyContent: "center",
              }}
            >
              <input
                type='text'
                id='input'
                className='Input-text-checkout-email'
                placeholder='First Name'
                size='20'
                value={firstName}
                style={{
                  width: "44%",
                  marginBottom: "25px",
                  marginRight: "3%",
                }}
                onChange={(e) => setFirstName(e.target.value)}
              />

              <input
                type='text'
                id='input'
                className='Input-text-checkout-email'
                placeholder='Last Name'
                size='20'
                value={lastName}
                style={{ width: "44%", marginBottom: "25px" }}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <input
              type='text'
              id='input'
              className='Input-text-checkout-email'
              placeholder='Address'
              size='20'
              value={address}
              style={{ width: "91%", marginBottom: "25px" }}
              onChange={(e) => setAddress(e.target.value)}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                widht: "100%",
                justifyContent: "center",
              }}
            >
              <input
                type='text'
                id='input'
                className='Input-text-checkout-email'
                placeholder='City'
                size='20'
                value={city}
                style={{ width: "29%", marginRight: "2%" }}
                onChange={(e) => setCity(e.target.value)}
              />
              <select
                className='select-states-myaccount'
                style={{ width: "29%", marginRight: "2%", fontSize: "13px" }}
                onChange={(e) => setState(e.target.value)}
                value={state}
              >
                <optgroup>
                  {states.map((state) => (
                    <option key={state.name} value={state.name}>
                      {state.name}
                    </option>
                  ))}
                </optgroup>
              </select>
              <input
                type='text'
                id='input'
                className='Input-text-checkout-email'
                placeholder='Zip Code'
                size='20'
                value={zip}
                style={{ width: "29%" }}
                onChange={(e) => setZip(e.target.value)}
              />
            </div>
            <button
              className='submit-button-add-address'
              type='submit'
              disabled={
                firstName === "" ||
                lastName === "" ||
                address === "" ||
                city === "" ||
                state === "" ||
                zip === ""
              }
            >
              Submit
            </button>
            <div
              style={{ marginTop: "15px", cursor: "pointer" }}
              onClick={() => {
                setShowAddForm(false);
                setFirstName("");
                setLastName("");
                setAddress("");
                setCity("");
                setState("");
                setZip("");
              }}
            >
              Cancel
            </div>
          </form>
        </div>
      </div>
      {/*END OF ADD ADDRESS FORM*/}

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

          {/* <div
            className='myaccount-tab'
            style={{
              color: step === 1 ? "black" : "gainsboro",
              textDecoration: step === 1 ? "underline" : "none",
            }}
            onClick={() => setStep(1)}
          >
            Account Details
          </div> */}

          <div
            className='myaccount-tab'
            style={{
              color: step === 2 ? "black" : "gainsboro",
              textDecoration: step === 2 ? "underline" : "none",
            }}
            onClick={() => setStep(2)}
          >
            Account Details
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
          {step === 0 ? (
            <OrderHistory orders={orders} />
          ) : step === 2 ? (
            <Addresses
              setShowAddForm={setShowAddForm}
              userId={userId}
              showAddForm={showAddForm}
            />
          ) : (
            <div>Hello</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
