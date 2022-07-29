//topnav css is from cart css page
import React from "react";
import "./Checkout.css";

const Checkout = () => {
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
      <div>hi</div>
    </div>
  );
};

export default Checkout;
