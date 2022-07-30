import React from "react";
import "./login.css";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  const isLoggedin = useSelector((state) => !!state.auth.id);

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
        <div class='Input-login'>
          <input
            type='text'
            id='input'
            class='Input-text'
            placeholder='Email'
            size='20'
            style={{ width: "100%" }}
          />

          <input
            type='password'
            id='input'
            class='Input-text'
            placeholder='Password'
            size='20'
            style={{ width: "100%", marginTop: "15px" }}
          />

          <div className='signup-but-container'>
            <div className='signup-but'>Sign in</div>
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
            Don't have an account?{"  "}
            <div
              style={{
                textDecoration: "underline",
                fontWeight: "600",
                marginLeft: "4px",
                cursor: "pointer",
              }}
            >
              <a href='/signup'>Sign up</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
