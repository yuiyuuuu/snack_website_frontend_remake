import React, { useState } from "react";
import "./login.css";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useLocation } from "react-router-dom";
import { authenticate, login } from "../../store";

const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const location = useLocation();

  const isLoggedin = useSelector((state) => !!state.auth.id);
  const userid = useSelector((state) => state.auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      dispatch(login(email, password));
      if (!userid.error) {
        if (location.state.from) {
          history.push({
            pathname: `/allsnacks/${location.state.from.id}`,
            state: { atc: true, quantity: location.state.quantity },
          });
        } else {
          history.push("/");
        }
      }
    } catch (error) {
      console.error(error);
      setErrorMessage("Failed to authenticate");
    }
  };

  if (isLoggedin) {
    history.push("/myaccount");
  }

  return (
    <div>
      <div className='topnav-login'>
        <div className='backbut-login'></div>
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
      <div className='parent-form-login'>
        <div
          style={{
            fontSize: "32px",
            width: "20%",
            fontWeight: "600",
            textAlign: "center",
          }}
        >
          Welcome back!
        </div>

        <div
          style={{
            marginTop: "10px",
            color: "red",
            display: !userid.error ? "none" : "",
          }}
        >
          {errorMessage}
        </div>

        <form onSubmit={(e) => handleSubmit(e)} className='Input-login'>
          <input
            type='text'
            id='input'
            className='Input-text'
            placeholder='Email'
            size='20'
            style={{ width: "100%" }}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type='password'
            id='input'
            className='Input-text'
            placeholder='Password'
            size='20'
            style={{ width: "100%", marginTop: "15px" }}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className='signup-but-container'>
            <button
              className='signup-but'
              type='submit'
              disabled={email === "" || password === ""}
              style={{
                pointerEvents: email === "" || password === "" ? "none" : "",
              }}
            >
              Sign in
            </button>
          </div>
        </form>

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
          Don't have an account?{"  "}
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
                pathname: "/signup",
                state: { ...location.state },
              }}
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
