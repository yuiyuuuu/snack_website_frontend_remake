import React, { useEffect, useState } from "react";
import "../Checkout.css";
import states from "../states";

const Step3 = ({
  cart,
  total,
  firstName,
  lastName,
  address,
  city,
  zip,
  state,
  email,
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
        <div className='left-step1' style={{ marginRight: "15px" }}>
          <div
            style={{
              fontSize: "18px",
              fontWeight: "600",
            }}
          >
            Thank you for your order, {firstName}
          </div>

          <div
            style={{
              margin: "15px 0 15px 0",
              borderWidth: "1px",
              borderColor: "gainsboro",
              borderStyle: "solid",
              marginRight: "8px",
            }}
          >
            <div style={{ marginLeft: "15px", marginBottom: "15px" }}>
              <div style={{ marginTop: "15px" }}>Contact information</div>
              <div style={{ marginTop: "5px" }}>{email}</div>
              <div style={{ marginTop: "30px" }}>Shipping Address</div>
              <div style={{ marginTop: "15px" }}>
                {firstName} {lastName}
              </div>
              <div style={{ marginTop: "4px" }}>{address}</div>
              <div style={{ marginTop: "4px" }}>
                {city} {states.find((s) => s.name === state).abbreviation} {zip}
              </div>
            </div>
          </div>
          <a href='/bullseye'>
            <div
              style={{
                width: "35%",
                fontSize: "13px",
                height: "50px",
                backgroundColor: "black",
                color: "white",
                justifyContent: "center",
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
                borderRadius: "7px",
                marginTop: "15px",
              }}
            >
              Continue Shopping
            </div>
          </a>
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
              <div>
                $
                {Math.round(item.product.price * item.quantity * 100) % 10 ===
                  0 && item.product.price * item.quantity !== 0
                  ? Math.round(item.product.price * item.quantity * 100) / 100 +
                    "0"
                  : Math.round(item.product.price * item.quantity * 100) / 100}
              </div>
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

export default Step3;
