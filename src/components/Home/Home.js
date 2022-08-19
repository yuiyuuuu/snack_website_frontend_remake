import React, { useEffect, useRef, useState } from "react";
import "./Home.css";
import Navbar from "../Navbar/Navbar.js";
import { objects } from "./objects";
import BottomNav from "../BottomNav/BottomNav";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/Snacks";
import SnackView from "../Allsnacks/SnackView/SnackView";
import { categories } from "./objects";

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
  const imageref = useRef(null);

  const dispatch = useDispatch();

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

  const products = useSelector((state) => state.products);
  const [filteredProducts, setFilteredProducts] = useState([]);

  let url = new URL(window.location.href);
  const searchParams = new URLSearchParams(url.search);
  const value = searchParams.getAll("search");

  function sorting(a, b) {
    if (
      a.name.toLowerCase()[0] === value[0].toLowerCase()[0] &&
      b.name.toLowerCase()[0] === value[0].toLowerCase()[0]
    ) {
      return 0;
    } else if (a.name.toLowerCase()[0] === value[0].toLowerCase()[0]) {
      return -1;
    } else if (b.name.toLowerCase()[0] === value[0].toLowerCase()[0]) {
      return 1;
    }
    return 0;
  }

  useEffect(() => {
    if (!searchParams.getAll("search").length) return;
    const v = searchParams.getAll("search")[0].toLowerCase();
    const result = [];

    categories.forEach((item) => {
      if (item.toLowerCase().includes(v)) {
        const categoryArray = products.filter((i) =>
          item === "Frozen" || item === "Refrigerated"
            ? i.cat.type === "Refrigerated/Frozen"
            : i.cat.type === item
        );
        result.push(...categoryArray);
        console.log(products);
      }
    });

    products.forEach((item) => {
      if (item.name.toLowerCase().includes(v)) {
        result.push(item);
      }
    });
    let uniqueItems = [...new Set(result)]; //returns unique items so we dont get duplicates from categories and the name

    uniqueItems.sort(sorting);

    setFilteredProducts(uniqueItems);
  }, [products, searchParams.getAll("search")[0]]);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  useEffect(() => {
    if (value.length) return;
    const scroll = (num) => {
      setSmooth(true);
      if (num === 1) {
        setSmoothVertical(false);
        scrollRef5.current.scrollTop += scrollRef6.current.offsetHeight + 100;
        scrollRef3.current.scrollTop += -scrollRef4.current.offsetHeight - 100;
        scrollRef.current.scrollLeft += -10000;
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
        }, 1000);
      } else {
        setTimeout(() => {
          scrollRef.current.scrollLeft += scrollRef2.current.offsetWidth / 6;

          scrollRef3.current.scrollTop += imageref.current.offsetHeight - 0.57;
          scrollRef5.current.scrollTop += -imageref.current.offsetHeight + 0.5;

          return scroll(num + 1);
        }, 2500);
      }
    };
    scroll(1);
  }, []);

  return (
    <>
      {!searchParams.getAll("search").length ? (
        <div className='home'>
          <Navbar />
          <div className='image-parent-container'>
            <div
              style={{
                width: "50%",
                aspectRatio: "1.02",
                backgroundColor: "rgb(55, 113, 250)",
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
                className='text-main-hook'
              >
                Tasty snacks delivered in minutes.
              </div>
              <a href='/bullseye'>
                {" "}
                <div className='shop-button-home animation-underline-home'>
                  Shop Now
                </div>
              </a>
            </div>
            <div
              style={{ width: "50%", display: "flex", flexDirection: "column" }}
            >
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
                        ref={imageref}
                        className='image-vertical'
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                marginTop: "45px",
                display: "flex",
                flexDirection: "row",
                width: "90%",
                justifyContent: "space-evenly",
                alignSelf: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <img
                  src='https://cdn.discordapp.com/attachments/775994350143930391/1007486148781813810/unknown.png'
                  style={{ width: "80px", height: "80px" }}
                />
                <div
                  style={{
                    fontSize: "40px",
                    fontWeight: "600",
                    textAlign: "center",
                  }}
                >
                  Hundreds of Items
                </div>
                <div style={{ width: "65%", textAlign: "center" }}>
                  From your favorite salty chips & crackers to refreshing
                  electrolyte drinks and sodas and more
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <img
                  src='https://cdn.discordapp.com/attachments/775994350143930391/1007486170881601567/unknown.png'
                  style={{ width: "80px", height: "80px", marginRight: "11px" }}
                />
                <div
                  style={{
                    fontSize: "40px",
                    fontWeight: "600",
                    textAlign: "center",
                  }}
                >
                  Delivered Fast
                </div>
                <div style={{ width: "65%", textAlign: "center" }}>
                  With our fulfillment centers all around the country means we
                  get your order to your door in as little as 30 minutes.
                </div>
                <div
                  style={{
                    color: "gainsboro",
                    fontSize: "10px",
                    marginTop: "10px",
                  }}
                >
                  *Not guarnteed. Average delivery time.
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <img
                  src='https://cdn.discordapp.com/attachments/775994350143930391/1007486192029290556/unknown.png'
                  style={{ width: "80px", height: "80px" }}
                />
                <div
                  style={{
                    fontSize: "40px",
                    fontWeight: "600",
                    textAlign: "center",
                  }}
                >
                  Free Delivery
                </div>
                <div style={{ width: "65%", textAlign: "center" }}>
                  Everything you need... fast and fresh delivered right to your
                  door at no extra cost.
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              textAlign: "center",
              fontSize: "44px",
              fontWeight: "600",
              marginTop: "60px",
            }}
          >
            Browse a Popular Category
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  fontSize: "17px",
                  marginTop: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  width: "8%",
                }}
                className='start-shopping-home'
              >
                <a href='/bullseye' style={{ color: "rgb(23, 144, 243)" }}>
                  Start Shopping
                </a>

                <svg
                  fill='none'
                  viewBox='0 0 20 20'
                  height='20'
                  width='20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    xmlns='http://www.w3.org/2000/svg'
                    d='M3.125 10H16.875'
                    stroke='#00A4FF'
                    strokeWidth='2'
                    strokeLinejoin='round'
                  ></path>
                  <path
                    xmlns='http://www.w3.org/2000/svg'
                    d='M11.25 4.375L16.875 10L11.25 15.625'
                    stroke='#00A4FF'
                    strokeWidth='2'
                    strokeLinejoin='round'
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              marginTop: "25px",
            }}
          >
            <div className='category-grid-container'>
              {objects.map((item) => (
                <a href={Object.values(item)[1]}>
                  <div className='backgroundcolor'>
                    <span
                      style={{
                        marginTop: "15px",
                        marginBottom: "10px",
                      }}
                      className='georgia-font'
                    >
                      {Object.keys(item)[0]}
                    </span>
                    <img
                      src={Object.values(item)[0]}
                      style={{ width: "165px", height: "175px" }}
                    />
                  </div>
                </a>
              ))}
            </div>
          </div>
          <BottomNav />
        </div>
      ) : (
        <div>
          <Navbar />
          {filteredProducts.length ? (
            <div
              style={{
                width: "100%",
                justifyContent: "center",
                display: "flex",
                marginTop: "10vh",
                marginBottom: "5vh",
                marginBottom: "18vh",
              }}
            >
              <div
                style={{
                  width: "70%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div style={{ fontSize: "30px", fontWeight: "600" }}>
                  {filteredProducts.length} results for "{value}"
                </div>

                <div className='grid-container-search'>
                  {filteredProducts.map((item) => (
                    <SnackView
                      key={item.name}
                      photoUrl={item.photoURL}
                      title={item.name}
                      description={item.desc}
                      price={item.price}
                      snack={item}
                    />
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div
              style={{
                width: "100%",
                height: "53vh",
                justifyContent: "center",
                display: "flex",
                marginTop: "10vh",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <div style={{ fontSize: "30px", fontWeight: "600" }}>
                  No results for "{value}"
                </div>
                <img
                  src='https://cdn.discordapp.com/attachments/775994350143930391/1009974736098439229/unknown.png'
                  style={{ height: "100px", width: "100px", marginTop: "30px" }}
                />
                <div
                  style={{
                    marginTop: "20px",
                    fontSize: "24px",
                    fontWeight: "600",
                    cursor: "underline",
                    textDecoration: "underline",
                  }}
                >
                  <a href='/bullseye'>Return to shop</a>
                </div>
              </div>
            </div>
          )}
          <BottomNav />
        </div>
      )}
    </>
  );
};

export default Home;
