//topnav css is from cart css page
import React, { useEffect, useState } from "react";
import "./Checkout.css";
import Step1 from "./Step1/Step1";
import Step2 from "./Step2/Step2";
import { useSelector, useDispatch } from "react-redux";
import { fetchCart } from "../../store/cart";

const Checkout = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cartReducer);
  const userid = useSelector((state) => state.auth);

  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");

  const [total, setTotal] = useState(0);

  const calculatePrice = () => {
    let totalPrice = 0;
    cart.forEach((item) => {
      const totalOne = item.product.price * item.quantity;
      totalPrice += totalOne;
    });
    setTotal(totalPrice);
  };

  useEffect(() => {
    dispatch(fetchCart(userid.id));
  }, [userid]);

  useEffect(() => {
    calculatePrice();
  }, [cart]);

  console.log(cart);
  return (
    <div>
      <div className='topnav-cart'>
        <a href='/cart'>
          <div className='back-but-cart'>&#8592; Cart</div>
        </a>
        <div
          style={{
            position: "absolute",
            marginLeft: "42%",
            marginRight: "50%",
          }}
        >
          <a href='/allsnacks'>
            <img
              src={
                "https://cdn.discordapp.com/attachments/779278654714675232/1001644818612637726/cover.png"
              }
              style={{ height: "85px" }}
            />
          </a>
        </div>
        <div
          style={{
            position: "absolute",
            top: "100%",
            backgroundColor: "gainsboro",
            width: "100%",
            height: ".5px",
          }}
        />
      </div>
      <div className='stepper-container'>
        <div className='stepper-inner-container'>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <div
              className='circle-checkout'
              style={{
                backgroundColor: step > 1 ? "	#7DF9FF" : "lightgray",
              }}
            >
              {step > 1 ? (
                <img
                  src='https://cdn.discordapp.com/attachments/779278654714675232/1002730276033658930/check.png'
                  style={{ width: "12px", height: "12px" }}
                ></img>
              ) : (
                "1"
              )}
            </div>
            <div>Shipping</div>
          </div>

          <div
            style={{
              flexGrow: 1,
              backgroundColor: "gray",
              height: "1px",
              marginLeft: "8px",
              marginRight: "8px",
            }}
          />

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <div
              className='circle-checkout'
              style={{
                backgroundColor: step > 2 ? "	#7DF9FF" : "lightgray",
              }}
            >
              {step > 2 ? (
                <img
                  src='https://cdn.discordapp.com/attachments/779278654714675232/1002730276033658930/check.png'
                  style={{ width: "12px", height: "12px" }}
                ></img>
              ) : (
                "2"
              )}
            </div>
            <div>Payment</div>
          </div>

          <div
            style={{
              flexGrow: 1,
              backgroundColor: "gray",
              height: "1px",
              marginLeft: "8px",
              marginRight: "8px",
            }}
          />

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <div
              className='circle-checkout'
              style={{
                backgroundColor: step > 2 ? "	#7DF9FF" : "lightgray",
              }}
            >
              {step > 2 ? (
                <img
                  src='https://cdn.discordapp.com/attachments/779278654714675232/1002730276033658930/check.png'
                  style={{ width: "12px", height: "12px" }}
                ></img>
              ) : (
                "3"
              )}
            </div>
            <div>Confirmation</div>
          </div>
        </div>
      </div>
      {step === 1 ? (
        <Step1
          setEmail={setEmail}
          setFirstName={setFirstName}
          setLastName={setLastName}
          setAddress={setAddress}
          setCity={setCity}
          setState={setState}
          setZip={setZip}
          setStep={setStep}
          cart={cart}
          total={total}
        />
      ) : step === 2 ? (
        <Step2 />
      ) : (
        <Step3 />
      )}
    </div>
  );
};

export default Checkout;
