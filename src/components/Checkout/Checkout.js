//topnav css is from cart css page
import React, { useEffect, useState } from "react";
import "./Checkout.css";
import Step1 from "./Step1/Step1";
import Step2 from "./Step2/Step2";
import Step3 from "./Step3/Step3";
import { useSelector, useDispatch } from "react-redux";
import { fetchCart } from "../../store/cart";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

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
  const [state, setState] = useState("State");
  const [zip, setZip] = useState("");

  const [total, setTotal] = useState(0);

  const stripePromise = loadStripe(
    "pk_test_51L9yoAIILTUpIrN8iTUzIA9WvtgWwbV5m2v7MhzzemIV0oe5M5ZAfh2k6woPHKYGHSZyh0KLt89LOYFzhQwxInuT00mqP6sYUS"
  );

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
          <a href='/bullseye'>
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
      {cart.length !== 0 ? (
        <div>
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
              email={email}
              firstName={firstName}
              lastName={lastName}
              address={address}
              city={city}
              state={state}
              zip={zip}
              userId={userid}
            />
          ) : step === 2 ? (
            <Elements stripe={stripePromise}>
              <Step2
                setStep={setStep}
                cart={cart}
                total={total}
                userid={userid}
                email={email}
                firstName={firstName}
                lastName={lastName}
                address={address}
                city={city}
                state={state}
                zip={zip}
              />
            </Elements>
          ) : (
            <Step3
              cart={cart}
              total={total}
              userid={userid}
              firstName={firstName}
              lastName={lastName}
              address={address}
              city={city}
              state={state}
              zip={zip}
              email={email}
            />
          )}
        </div>
      ) : (
        <div
          style={{
            marginTop: "150px",
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div>You have no items in your cart</div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
