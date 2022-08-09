import React, { useEffect, useState } from "react";
import "./step2.css";
import { CardElement } from "@stripe/react-stripe-js";
import { useElements } from "@stripe/react-stripe-js";
import { useStripe } from "@stripe/react-stripe-js";
import { fetchAUser } from "../../../store";

import {
  _createOrderDetail,
  _createOrderItem,
  _updateProductQuantity,
  _deleteCartItem,
  _deleteShoppingSession,
  _createshoppingSession,
} from "../../../store/checkout";

import { useDispatch, useSelector } from "react-redux";

const Step2 = ({
  cart,
  setStep,
  total,
  userid,
  email,
  firstName,
  lastName,
  address,
  city,
  state,
  zip,
}) => {
  const elements = useElements();
  const stripe = useStripe();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    // create new order detail
    const detailTotal = {
      userId: userid.id,
      total: Number(total),
      firstName: firstName,
      lastName: lastName,
      email: email,
      address: address,
      city: city,
      state: state,
      zip: zip,
    };
    dispatch(_createOrderDetail(detailTotal));

    // create new order items
    await cart.map((item) => {
      const obj = {
        itemId: item.product.id,
        userId: userid.id,
        quantity: item.quantity,
      };
      dispatch(_createOrderItem(obj));
    });

    // update product quantities
    await cart.map((item) => {
      let { product } = item;
      const currentQty = product.quantity;
      const updatedQty = currentQty - item.quantity;
      product = { ...product, quantity: updatedQty };
      return dispatch(_updateProductQuantity(product));
    });

    // delete cart item
    await cart.map((item) => {
      return dispatch(_deleteCartItem(item.id));
    });

    // delete shopping session
    await dispatch(_deleteShoppingSession(user.shopping_session.id));

    // // create shopping session
    await dispatch(_createshoppingSession(userid.id));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
    setLoading(true);
    if (!error) {
      try {
        const { id } = paymentMethod;
        fetch("/payment", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + process.env.REACT_APP_STRIPE_SECRET_KEY,
          },
          body: JSON.stringify({ id: id, items: cart }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);

            setLoading(false);
            setStep(3);
          });

        handleCheckout();
      } catch (error) {
        console.log("Error", error);
        setLoading(false);
      }
    } else {
      console.log(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    dispatch(fetchAUser(userid.id));
  }, [userid]);

  //some classname /css is copied from step 1
  return (
    <>
      {loading ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <div className='load' />
          <div style={{ marginTop: "15px" }}>
            Your order is being processed, please wait
          </div>
        </div>
      ) : (
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
              <div style={{ marginBottom: "30px" }}>Payment information</div>
              <form onSubmit={(e) => handleSubmit(e)}>
                <div style={{ width: "88%", marginBottom: "20px" }}>
                  <CardElement />
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    marginRight: "12%",
                  }}
                >
                  <button
                    style={{
                      width: "27%",
                      fontSize: "13px",
                      height: "40px",
                      backgroundColor: "black",
                      color: "white",
                      justifyContent: "center",
                      display: "flex",
                      alignItems: "center",
                      cursor: "pointer",
                      borderRadius: "7px",
                      marginTop: "15px",
                    }}
                    type='submit'
                    disabled={!stripe || !elements}
                  >
                    <a
                      className='animation-underline-step1'
                      style={{ fontSize: "13px" }}
                    >
                      Pay
                    </a>
                  </button>
                </div>
              </form>
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
                    {Math.round(item.product.price * item.quantity * 100) %
                      10 ===
                      0 && item.product.price * item.quantity !== 0
                      ? Math.round(item.product.price * item.quantity * 100) /
                          100 +
                        "0"
                      : Math.round(item.product.price * item.quantity * 100) /
                        100}
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
      )}
    </>
  );
};

export default Step2;
