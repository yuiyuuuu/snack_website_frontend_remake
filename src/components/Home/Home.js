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
  const scrollRef2 = useRef(null);
  const scrollRef3 = useRef(null);
  const scrollRef4 = useRef(null);
  const scrollRef5 = useRef(null);
  const scrollRef6 = useRef(null);

  const images = [
    "https://cdn.discordapp.com/attachments/775994350143930391/1007148225536479232/toothpaste.jpeg",
    "https://cdn.discordapp.com/attachments/775994350143930391/1007159809486901289/unknown.png",
    "https://cdn.discordapp.com/attachments/775994350143930391/1007159947429154816/unknown.png",
    "https://cdn.discordapp.com/attachments/775994350143930391/1007160048574791721/unknown.png",
    "https://cdn.discordapp.com/attachments/775994350143930391/1007160165000286279/unknown.png",
    "https://cdn.discordapp.com/attachments/775994350143930391/1007163477271523348/unknown.png",
  ];

  const images2 = [
    "https://cdn.discordapp.com/attachments/775994350143930391/1007191052303732796/unknown.png",
    "https://cdn.discordapp.com/attachments/775994350143930391/1007190979847131176/unknown.png",
    "https://cdn.discordapp.com/attachments/775994350143930391/1007190960129712208/unknown.png",
    "https://cdn.discordapp.com/attachments/775994350143930391/1007190938046697594/unknown.png",
    "https://cdn.discordapp.com/attachments/775994350143930391/1007190919327531018/unknown.png",
    "https://cdn.discordapp.com/attachments/775994350143930391/1007191052303732796/unknown.png",
  ];

  const images3 = [
    "https://cdn.discordapp.com/attachments/775994350143930391/1007201042078892032/unknown.png",
    "https://cdn.discordapp.com/attachments/775994350143930391/1007201084386857050/unknown.png",
    "https://cdn.discordapp.com/attachments/775994350143930391/1007201098571989053/unknown.png",
    "https://cdn.discordapp.com/attachments/775994350143930391/1007201122152349827/unknown.png",
    "https://cdn.discordapp.com/attachments/775994350143930391/1007201163520782386/unknown.png",
    "https://cdn.discordapp.com/attachments/775994350143930391/1007201042078892032/unknown.png",
  ];

  const [smooth, setSmooth] = useState(true);
  const [smoothVertical, setSmoothVertical] = useState(false);

  useEffect(() => {
    const scroll = (num) => {
      setSmooth(true);
      if (num === 1) {
        setSmoothVertical(false);
        scrollRef5.current.scrollTop += scrollRef6.current.offsetHeight + 100;
        setSmoothVertical(true);
      }

      if (num % 6 === 0) {
        scrollRef.current.scrollLeft += scrollRef2.current.offsetWidth / 6;
        scrollRef3.current.scrollTop +=
          scrollRef4.current.offsetHeight / 6 + 1.7;
        scrollRef5.current.scrollTop +=
          -scrollRef6.current.offsetHeight / 6 - 1.7;
        setTimeout(() => {
          setSmooth(false);
          scrollRef3.current.scrollTop +=
            -scrollRef4.current.offsetHeight - 100;
          scrollRef.current.scrollLeft += -10000;
          return scroll(1);
        }, 700);
      } else {
        setTimeout(() => {
          scrollRef.current.scrollLeft += scrollRef2.current.offsetWidth / 6;
          scrollRef3.current.scrollTop +=
            scrollRef4.current.offsetHeight / 6 + 1.7;
          scrollRef5.current.scrollTop +=
            -scrollRef6.current.offsetHeight / 6 - 1.7;
          return scroll(num + 1);
        }, 2500);
      }
    };

    // const verticalScroll = (num) => {
    //   setSmooth(true);
    //   if (num % 6 === 0) {
    //     scrollRef3.current.scrollTop +=
    //       scrollRef4.current.offsetHeight / 6 + 1.7;
    //     setTimeout(() => {
    //       setSmooth(false);
    //       scrollRef3.current.scrollTop +=
    //         -scrollRef4.current.offsetHeight - 100;
    //       return verticalScroll(num + 1);
    //     }, 700);
    //   } else {
    //     setTimeout(() => {
    //       scrollRef3.current.scrollTop +=
    //         scrollRef4.current.offsetHeight / 6 + 1.7;
    //       return verticalScroll(num + 1);
    //     }, 2545);
    //   }
    // };

    // verticalScroll(1);
    scroll(1);
  }, []);

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
            <div className='slider-inner' ref={scrollRef2}>
              {images.map((item) => (
                <img
                  src={item}
                  style={{
                    height: "100%",
                    width: "16.666%",
                    resize: "inline",
                    userSelect: "none",
                  }}
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
                width: "50%",
                scrollBehavior: smooth ? "smooth" : "auto",
                pointerEvents: "none",
              }}
              className='vertical-container'
              ref={scrollRef3}
            >
              <div style={{ height: "600%" }} ref={scrollRef4}>
                {images2.map((item) => (
                  <img
                    src={item}
                    style={{
                      height: "16.76%",
                      width: "100%",
                      resize: "inline",
                      userSelect: "none",
                    }}
                    className='image-vertical'
                  />
                ))}
              </div>
            </div>
            <div
              style={{
                aspectRatio: "1",
                width: "50%",
                scrollBehavior: smoothVertical ? "smooth" : "auto",
                pointerEvents: "none",
              }}
              className='vertical-container'
              ref={scrollRef5}
            >
              <div style={{ height: "600%" }} ref={scrollRef6}>
                {images3.map((item) => (
                  <img
                    src={item}
                    style={{
                      height: "16.76%",
                      width: "100%",
                      resize: "inline",
                      userSelect: "none",
                    }}
                    className='image-vertical'
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
