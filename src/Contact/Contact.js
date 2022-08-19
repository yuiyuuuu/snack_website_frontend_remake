import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import "./Contact.css";
import BottomNav from "../components/BottomNav/BottomNav";

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  return (
    <div>
      <Navbar />
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginBottom: "17vh",
        }}
      >
        <div
          style={{
            width: "70%",
            display: "flex",
            flexDirection: "column",
            marginTop: "10vh",
          }}
        >
          <div
            style={{
              fontSize: "90px",
              color: "skyblue",
              alignself: "auto",
            }}
          >
            Contact Us
          </div>

          <div style={{ marginTop: "15px", marginLeft: "10px" }}>
            <span style={{ textDecoration: "underline" }}>
              <a href='/'>Home</a>
            </span>{" "}
            -{" "}
            <span style={{ textDecoration: "underline" }}>
              <a href='/contact'>Contact Us</a>
            </span>
          </div>

          <div
            style={{
              width: "50%",
              alignSelf: "center",
              display: "flex",
              flexDirection: "column",
              marginTop: "5vh",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <input
                type='text'
                id='input'
                className='Input-text-contact'
                placeholder='First Name'
                size='20'
                style={{ width: "46%" }}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                type='text'
                id='input'
                className='Input-text-contact'
                placeholder='Last Name'
                size='20'
                style={{ width: "46%" }}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <input
              type='text'
              id='input'
              className='Input-text-contact'
              placeholder='Email'
              size='20'
              style={{ width: "100%", marginTop: "17px" }}
              onChange={(e) => setEmail(e.target.value)}
            />

            <div
              style={{
                width: "100%",
                marginTop: "17px",
                height: "150px",
                border: "1px solid black",
              }}
            >
              <textarea
                type='textarea'
                id='input'
                className='Input-text-contact message-contact'
                placeholder='Message'
                size='20'
                style={{ width: "100%", paddingTop: "10px" }}
                onChange={(e) => setMessage(e.target.value)}
              />
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <div
                  className='submit-contact animation-contact'
                  style={{
                    pointerEvents:
                      email === "" ||
                      firstName === "" ||
                      (lastName === "") | (message === "")
                        ? "none"
                        : "",
                    cursor:
                      email === "" ||
                      firstName === "" ||
                      (lastName === "") | (message === "")
                        ? ""
                        : "pointer",
                  }}
                >
                  Submit
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BottomNav />
    </div>
  );
};

export default Contact;
