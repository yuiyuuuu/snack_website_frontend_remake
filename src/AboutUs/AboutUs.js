import React from "react";
import BottomNav from "../components/BottomNav/BottomNav";
import Navbar from "../components/Navbar/Navbar";
import "./About.css";

const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginTop: "10vh",
        }}
      >
        <div style={{ width: "80%", display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: "100px", color: "skyblue" }}>About Us</div>
          <div style={{ marginTop: "15px" }}>
            <span style={{ textDecoration: "underline" }}>
              <a href='/'>Home</a>
            </span>{" "}
            -{" "}
            <span style={{ textDecoration: "underline" }}>
              <a href='/about'>About Us</a>
            </span>
          </div>
          <div className='title-about'>
            You're busy, so we'll keep this quick
          </div>

          <div className='title-about' style={{ marginTop: "60px" }}>
            What is Bullseye?
          </div>

          <div className='desc-about'>
            Bullseye delivers Groceries, Alcohol, Home Essentials & more. Order
            in seconds, delivered in minutes.
          </div>

          <div className='title-about'>How much is the delivery fee?</div>
          <div className='desc-about'>
            Free! At no extra cost, we delivery right to your door in minutes.
          </div>

          <div className='title-about'>How late does Bullseye deliver?</div>
          <div className='desc-about'>
            We are here for you whenever to fulfill your needs. Our service runs
            24/7.
          </div>

          <div className='title-about'>
            Where can I find help for Bullseye services?
          </div>
          <div className='desc-about' style={{ marginBottom: "10vh" }}>
            We are happy to help you with any question or problem you have!
            Please navigate to{" "}
            <span style={{ textDecoration: "underline" }}>
              <a href='/contact'>
                https://snack-website2.herokuapp.com/contact
              </a>
            </span>{" "}
            or click{" "}
            <span style={{ textDecoration: "underline" }}>
              <a href='/contact'>here</a>
            </span>
          </div>
        </div>
      </div>
      <BottomNav />
    </div>
  );
};

export default AboutUs;
