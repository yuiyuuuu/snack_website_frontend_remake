import React, { useEffect } from "react";
import "./Navbar.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchCart } from "../../store/cart";
import { fetchAUser } from "../../store";

const Navbar = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cartReducer);
  const userId = useSelector((state) => state.auth);

  useEffect(() => {
    const fetchUser = () => {
      if (!userId) return "loading";
      if (userId) {
        dispatch(fetchAUser(userId.id));
      }
    };

    fetchUser();
    dispatch(fetchCart(userId.id));
  }, [userId]);
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
              <a href='/' style={{ textDecoration: "none", color: "white" }}>
                <img
                  src='https://cdn.discordapp.com/attachments/779278654714675232/1001654225819934801/logocropped.png'
                  alt='logo'
                  width={37}
                />
              </a>
            </div>
            <div>
              <a
                href='/allsnacks'
                style={{ textDecoration: "none", color: "black" }}
              >
                Shop Button
              </a>
            </div>
            <div style={{ flexGrow: 1 }} />
          </div>

          <div style={{ flexGrow: 1 }} />
          <a href='/allsnacks'>
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
          </a>
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
              <a
                href='/myaccount'
                style={{ textDecoration: "none", color: "black" }}
              >
                Account
              </a>
            </div>
            <a href='/cart'>
              <div className='Nav--Cart' style={{ marginRight: "30px" }}>
                My Bag ({cart.length})
              </div>
            </a>
            <div className='Nav--Login'>
              <a
                href='/login'
                style={{ textDecoration: "none", color: "black" }}
              >
                Admin
              </a>
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
