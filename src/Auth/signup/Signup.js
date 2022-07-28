import React from "react";
import "./signup.css";

const Signup = () => {
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
            class='Input-text-signup'
            placeholder='First Name'
            size='20'
            style={{ width: "47.9%" }}
          />

          <input
            type='text'
            id='input'
            class='Input-text-signup'
            placeholder='Last Name'
            size='20'
            style={{ width: "47.9%", marginBottom: "15px" }}
          />

          <input
            type='text'
            id='input'
            class='Input-text-signup'
            placeholder='Email'
            size='20'
            style={{ width: "100%" }}
          />

          <input
            type='password'
            id='input'
            class='Input-text-signup'
            placeholder='Password'
            size='20'
            style={{ width: "100%", marginTop: "15px" }}
          />

          <div className='signup-but-container'>
            <div className='signup-but'>Sign up</div>
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
              <a href='/login'>Sign in</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
