import React from "react";
import "../Checkout.css";
import states from "../states";

const Step1 = ({
  setEmail,
  setFirstName,
  setLastName,
  setAddress,
  setCity,
  setState,
  setZip,
  setStep,
  cart,
  total,
  email,
  firstName,
  lastName,
  address,
  city,
  state,
  zip,
}) => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        marginTop: "70px",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "67%",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div className='left-step1'>
          <div>Contact information</div>
          <div style={{ marginTop: "18px" }}>
            <input
              type='text'
              id='input'
              className='Input-text-checkout-email'
              placeholder='Email'
              size='20'
              style={{ width: "95%", marginBottom: "15px" }}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div style={{ marginTop: "25px" }}>Shipping information</div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginTop: "15px",
            }}
          >
            <input
              type='text'
              id='input'
              className='Input-text-checkout-email'
              placeholder='First Name'
              size='20'
              style={{ width: "46%", marginBottom: "15px", marginRight: "3%" }}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type='text'
              id='input'
              className='Input-text-checkout-email'
              placeholder='Last Name'
              size='20'
              style={{ width: "46%", marginBottom: "15px" }}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <input
            type='text'
            id='input'
            className='Input-text-checkout-email'
            placeholder='Address'
            size='20'
            style={{ width: "95%", marginBottom: "15px" }}
            onChange={(e) => setAddress(e.target.value)}
          />
          <div style={{ display: "flex", flexDirection: "row" }}>
            <input
              type='text'
              id='input'
              className='Input-text-checkout-email'
              placeholder='City'
              size='20'
              style={{
                width: "30%",
                marginBottom: "15px",
                marginRight: "2.5%",
              }}
              onChange={(e) => setCity(e.target.value)}
            />

            <select
              className='Input-text-checkout-email'
              style={{ width: "30%", marginRight: "2.5%", fontSize: "13px" }}
              onChange={(e) => setState(e.target.value)}
            >
              <optgroup>
                {states.map((state) => (
                  <option key={state} value={state}>
                    {state}
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
              style={{ width: "30%", marginBottom: "15px" }}
              onChange={(e) => setZip(e.target.value)}
            />
          </div>
          <div
            style={{
              width: "95%",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <div
              style={{
                width: "36%",
                fontSize: "13px",
                height: "48px",
                backgroundColor: "black",
                color: "white",
                justifyContent: "center",
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
                borderRadius: "7px",
                marginTop: "15px",
                pointerEvents:
                  email !== "" &&
                  firstName !== "" &&
                  lastName !== "" &&
                  address !== "" &&
                  city !== "" &&
                  state !== "State" &&
                  zip !== ""
                    ? "auto"
                    : "none",
              }}
              onClick={() => setStep(2)}
            >
              Continue to payment
            </div>
          </div>
        </div>
        <div style={{ backgroundColor: "gray", width: "1px" }} />
        <div className='right-step1'>
          {cart.map((item) => (
            <div className='item-checkout' key={item.id}>
              <img
                src={item.product.photoURL}
                style={{ width: "75px", height: "75px" }}
              />
              <div style={{ width: "55%", marginRight: "5px" }}>
                <div>{item.product.name}</div>
                <div
                  style={{
                    fontSize: "12px",
                    marginTop: "5px",
                    color: "darkgray",
                  }}
                >
                  Quantity: {item.quantity}
                </div>
              </div>
              <div>${item.product.price * item.quantity}</div>
            </div>
          ))}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginRight: "18%",
              marginTop: "30px",
              marginLeft: "2%",
            }}
          >
            <div style={{ fontSize: "18px", fontWeight: "600" }}>Total</div>
            <div style={{ flexGrow: 1 }} />
            <div style={{ fontSize: "18px", fontWeight: "600" }}>
              $
              {Math.round(total * 100) % 10 === 0 && total !== 0
                ? Math.round(total * 100) / 100 + "0"
                : Math.round(total * 100) / 100}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step1;
