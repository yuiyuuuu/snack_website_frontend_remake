import React, { useState } from "react";
import "./signup.css";
import { useDispatch, useSelector } from "react-redux";
import { authenticate } from "../../store";
import { useHistory, useLocation, Link } from "react-router-dom";

const Signup = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const [firstName, setFirstname] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      dispatch(authenticate(email, password, firstName, lastName, "signup"));
      if (location.state.from) {
        history.push({
          pathname: `/allsnacks/${location.state.from.id}`,
          state: { atc: true, quantity: location.state.quantity },
        });
      } else {
        history.push("/");
      }
    } catch (error) {
      console.log("Failed to create an account");
      console.log(error);
    }
  };

  const isLoggedin = useSelector((state) => !!state.auth.id);

  if (isLoggedin) {
    history.push("/myaccount");
  }

  return (
    <div>
      <div className='topnav-signup'>
        <div className='backbut-signup'></div>
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
      <div className='parent-form-signup'>
        <div
          style={{
            fontSize: "32px",
            width: "20%",
            fontWeight: "600",
            textAlign: "center",
          }}
        >
          Order in seconds, delivered in 30 minutes or less.
        </div>
        <div class='Input-login'>
          <input
            type='text'
            id='input'
            className='Input-text-signup'
            placeholder='First Name'
            size='20'
            style={{ width: "47.9%" }}
            onChange={(e) => setFirstname(e.target.value)}
          />

          <input
            type='text'
            id='input'
            className='Input-text-signup'
            placeholder='Last Name'
            size='20'
            style={{ width: "47.9%", marginBottom: "15px" }}
            onChange={(e) => setLastName(e.target.value)}
          />

          <input
            type='text'
            id='input'
            className='Input-text-signup'
            placeholder='Email'
            size='20'
            style={{ width: "100%" }}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type='password'
            id='input'
            className='Input-text-signup'
            placeholder='Password'
            size='20'
            style={{ width: "100%", marginTop: "15px" }}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className='signup-but-container'>
            <div className='signup-but' onClick={(e) => handleSubmit(e)}>
              Sign up
            </div>
          </div>

          <div
            style={{
              marginTop: "15px",
              width: "100%",
              fontSize: "12px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            Already have an account?{"  "}
            <div
              style={{
                textDecoration: "underline",
                fontWeight: "600",
                marginLeft: "4px",
                cursor: "pointer",
              }}
            >
              <Link
                to={{
                  pathname: "/login",
                  state: { ...location.state },
                }}
              >
                Sign in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
