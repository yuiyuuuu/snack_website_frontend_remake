import React, { useEffect, useRef, useState } from "react";
import "./home.css";
import Navbar from "../Navbar/Navbar.js";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
  };
}

const Home = () => {
  const scrollRef = useRef(null);

  const images = [
    "https://cdn.discordapp.com/attachments/775994350143930391/1007148225536479232/toothpaste.jpeg",
    "https://cdn.discordapp.com/attachments/775994350143930391/1007159809486901289/unknown.png",
    "https://cdn.discordapp.com/attachments/775994350143930391/1007159947429154816/unknown.png",
    "https://cdn.discordapp.com/attachments/775994350143930391/1007160048574791721/unknown.png",
    "https://cdn.discordapp.com/attachments/775994350143930391/1007160165000286279/unknown.png",
    "https://cdn.discordapp.com/attachments/775994350143930391/1007163477271523348/unknown.png",
  ];

  const [smooth, setSmooth] = useState(true);
  const [dimensions, setDimensions] = useState(getWindowDimensions().width);

  useEffect(() => {
    const scroll = (num) => {
      setSmooth(true);
      if (num % 6 === 0) {
        scrollRef.current.scrollLeft += dimensions / 2;
        setTimeout(() => {
          setSmooth(false);
          scrollRef.current.scrollLeft += -10000;
          return scroll(1);
        }, 700);
      } else {
        setTimeout(() => {
          scrollRef.current.scrollLeft += dimensions / 2;
          console.log("NUMMMM", num);
          return scroll(num + 1);
        }, 3000);
      }
    };

    scroll(1);
  }, []);
  console.log(dimensions);
  return (
    <div className='home'>
      <Navbar />
      <div className='image-parent-container'>
        <div
          style={{
            width: "50%",
            aspectRatio: "1.02",
            backgroundColor: "aqua",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
          className='example'
        >
          <div
            style={{
              width: "450px",
              fontSize: "80px",
              fontWeight: "700",
              marginBottom: "30px",
              fontFamily: "Helvetica",
            }}
          >
            Tasty snacks delivered in minutes.
          </div>
          <a href='/allsnacks'>
            {" "}
            <div className='shop-button-home'>Shop Now</div>
          </a>
        </div>
        <div style={{ width: "50%", display: "flex", flexDirection: "column" }}>
          <div
            style={{
              aspectRatio: "2.06",
              width: "100%",
              scrollBehavior: smooth ? "smooth" : "auto",
              pointerEvents: "none",
            }}
            ref={scrollRef}
            className='snap'
          >
            <div className='slider-inner'>
              {images.map((item) => (
                <img
                  src={item}
                  style={{ height: "100%", width: "16.666%", resize: "inline" }}
                />
              ))}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <div
              style={{
                aspectRatio: "1",
                backgroundColor: "purple",
                width: "50%",
              }}
            >
              3
            </div>
            <div
              style={{
                aspectRatio: "1",
                backgroundColor: "aqua",
                width: "50%",
              }}
            >
              4
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
