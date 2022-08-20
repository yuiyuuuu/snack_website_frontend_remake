import React from "react";
import Navbar from "./Navbar/Navbar";
import BottomNav from "./BottomNav/BottomNav";

const Credits = () => {
  return (
    <div>
      <Navbar />
      <div
        style={{
          width: "75.5%",
          display: "flex",
          flexDirection: "column",
          marginLeft: "10%",
          marginTop: "5%",
          height: "47vh",
          marginRight: "5%",
          marginBottom: "10vh",
        }}
      >
        <div style={{ marginBottom: "15px" }}>
          <span style={{ textDecoration: "underline" }}>
            <a href='/'>Home</a>
          </span>{" "}
          -{" "}
          <span style={{ textDecoration: "underline" }}>
            <a href='/credits'>Credits</a>
          </span>
        </div>
        <div style={{ fontSize: "35px", fontWeight: "600" }}>
          Special Thanks To:
        </div>
        <div style={{ marginTop: "20px" }}>
          <a
            style={{ textDecoration: "underline", fontSize: "20px" }}
            href='https://www.gopuff.com/go'
          >
            Gopuff
          </a>
          <span style={{ fontSize: "20px" }}>
            {" "}
            - for images, product, and product description. Also home page
            design was inspired/copied by Gopuff's home page.
          </span>
        </div>

        <div style={{ marginTop: "20px" }}>
          <a
            style={{ textDecoration: "underline", fontSize: "20px" }}
            href='https://www.target.com/'
          >
            Target
          </a>
          <span style={{ fontSize: "20px" }}>
            {" "}
            - for images, product, and product descriptions
          </span>
        </div>
        <div style={{ marginTop: "20px" }}>
          <a
            style={{ textDecoration: "underline", fontSize: "20px" }}
            href='https://www.namecheap.com/logo-maker/'
          >
            Name Cheap
          </a>
          <span style={{ fontSize: "20px" }}> - for logo images</span>
        </div>

        <div style={{ marginTop: "20px" }}>
          <a
            style={{ textDecoration: "underline", fontSize: "20px" }}
            href='https://www.flaticon.com/'
          >
            FlatIcon
          </a>
          <span style={{ fontSize: "20px" }}> - for icon images</span>
        </div>

        <div style={{ marginTop: "20px", fontSize: "20px" }}>
          Note: this website is not monetized and for my educational purposes
          only. All transactions are tests and will not be charged and all
          orders will not be fulfilled. Please do not use your real card number.
          4242424242424242 is stripe test card, please use that instead.
        </div>
        <div style={{ marginTop: "20px", fontSize: "20px", marginTop: "20px" }}>
          Source code: https://github.com/yuiyuuuu/snack_website_frontend_remake
        </div>
      </div>
      <BottomNav />
    </div>
  );
};

export default Credits;
