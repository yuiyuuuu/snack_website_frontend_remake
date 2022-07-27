import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='Navbar'>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <div className='Navbar--Container' style={{ justifyContent: "center" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              marginLeft: "2%",
              alignItems: "center",
            }}
          >
            <div
              className='Nav--Logo'
              style={{ marginRight: "50px", height: "30px" }}
            >
              <Link to='/' style={{ textDecoration: "none", color: "white" }}>
                <img
                  src='https://cdn.discordapp.com/attachments/779278654714675232/1001654225819934801/logocropped.png'
                  alt='logo'
                  width={37}
                />
              </Link>
            </div>
            <div>
              <Link
                to='/allsnacks'
                style={{ textDecoration: "none", color: "black" }}
              >
                Shop Button
              </Link>
            </div>
            <div style={{ flexGrow: 1 }} />
          </div>

          <div style={{ flexGrow: 1 }} />
          <Link to='/allsnacks'>
            <div
              style={{
                marginLeft: "10px",
                marginTop: "5px",
                cursor: "pointer",
              }}
            >
              <img
                src='https://cdn.discordapp.com/attachments/779278654714675232/1001683047885840525/croppedprofile.png'
                style={{ height: "25px" }}
              />
            </div>
          </Link>
          <div style={{ flexGrow: 1 }} />
          <div
            style={{
              marginRight: "10px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              paddingRight: "1%",
              alignItems: "center",
            }}
          >
            <div className='Nav--Profile' style={{}}>
              {/* if user is logged in, or redirect */}
              <Link
                to='/myaccount'
                style={{ textDecoration: "none", color: "black" }}
              >
                Account
              </Link>
            </div>
            <Link to='/cart'>
              <div className='Nav--Cart' style={{ marginRight: "30px" }}>
                Cart
              </div>
            </Link>
            <div className='Nav--Login'>
              <Link
                to='/login'
                style={{ textDecoration: "none", color: "black" }}
              >
                Login/Signup Icon
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          backgroundColor: "gainsboro",
          height: ".5px",
        }}
      />
    </div>
  );
};

export default Navbar;
