import React from "react";
import "./BottomNav.css";

const BottomNav = () => {
  return (
    <div
      style={{
        width: "100%",
        height: " 300px",
        backgroundColor: "black",
        color: "white",
      }}
    >
      <div className='containerNav'>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: "4%",
          }}
        >
          <img
            src='https://cdn.discordapp.com/attachments/779278654714675232/1001654225819934801/logocropped.png'
            style={{ width: "195px", height: "180px" }}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "10%",
            marginRight: "10%",
            marginTop: "30px",
          }}
        >
          <div
            style={{
              fontWeight: "600",
              fontSize: "18px",
              marginBottom: "10px",
            }}
          >
            Company
          </div>
          <a className='sub' href='/about' style={{ color: "white" }}>
            About Us
          </a>
          <a className='sub' href='/contact' style={{ color: "white" }}>
            Contact Us
          </a>
          <a className='sub' href='/credits' style={{ color: "white" }}>
            Credits
          </a>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginRight: "15%",
            marginTop: "30px",
          }}
        >
          <div style={{ fontWeight: "600", fontSize: "18px" }}>Social</div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginBottom: "10px",
              marginTop: "10px",
            }}
          >
            <img
              src='https://cdn.discordapp.com/attachments/775994350143930391/1007797221644836944/unknown.png'
              className='social-image'
            />
            <a
              className='sub'
              href='https://www.instagram.com/'
              style={{ color: "white" }}
            >
              Instagram
            </a>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginBottom: "10px",
            }}
          >
            <img
              src='https://cdn.discordapp.com/attachments/775994350143930391/1007797263059386409/unknown.png'
              className='social-image'
            />
            <a
              className='sub'
              href='https://www.facebook.com/'
              style={{ color: "white" }}
            >
              Facebook
            </a>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginBottom: "10px",
            }}
          >
            <img
              src='https://cdn.discordapp.com/attachments/775994350143930391/1007797248064757870/unknown.png'
              className='social-image'
            />
            <a
              className='sub'
              href='https://www.twitter.com/'
              style={{ color: "white" }}
            >
              Twitter
            </a>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginBottom: "10px",
            }}
          >
            <img
              src='https://cdn.discordapp.com/attachments/775994350143930391/1007797289852612608/unknown.png'
              className='social-image'
            />
            <a
              className='sub'
              href='https://www.youtube.com/'
              style={{ color: "white" }}
            >
              Youtube
            </a>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <img
              src='https://cdn.discordapp.com/attachments/775994350143930391/1007797305161826435/unknown.png'
              className='social-image'
            />
            <a
              className='sub'
              href='https://www.linkedin.com/'
              style={{ color: "white" }}
            >
              LinkedIn
            </a>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: "30px",
            height: "38px",
          }}
        >
          <a
            href='https://play.google.com'
            rel='noreferrer noopener'
            target='_blank'
          >
            <img
              src='https://cdn.discordapp.com/attachments/775994350143930391/1007797180624552017/unknown.png'
              style={{
                width: "130px",
                height: "38px",
                cursor: "pointer",
              }}
            />
          </a>
        </div>
        <div style={{ marginTop: "30px", marginLeft: "20px" }}>
          <a
            href='https://www.apple.com/app-store/'
            rel='noreferrer noopener'
            target='_blank'
          >
            <img
              src='https://cdn.discordapp.com/attachments/775994350143930391/1007797160626114600/unknown.png'
              style={{ width: "130px", height: "38px", cursor: "pointer" }}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default BottomNav;
