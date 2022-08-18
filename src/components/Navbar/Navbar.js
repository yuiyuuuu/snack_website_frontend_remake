import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchCart } from "../../store/cart";
import { fetchAUser } from "../../store";
import { useHistory, useLocation } from "react-router";
import common from "./commonSearches";
import { fetchProducts } from "../../store/Snacks";
import { alphabet } from "./commonSearches";

const Navbar = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cartReducer);
  const userId = useSelector((state) => state.auth);
  const products = useSelector((state) => state.products);
  const history = useHistory();

  const location = useLocation();

  const [searchValue, setSearchValue] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const filteredProductsFour = filteredProducts.slice(0, 4);

  let url = new URL(window.location.href);

  const searchParams = new URLSearchParams(url.search);
  console.log(searchParams.getAll("search"));

  //sort when the first letter matches, prioritze products matching first letter
  function sorting(a, b) {
    if (
      a.name.toLowerCase()[0] === searchValue.toLowerCase()[0] &&
      b.name.toLowerCase()[0] === searchValue.toLowerCase()[0]
    ) {
      return 0;
    } else if (a.name.toLowerCase()[0] === searchValue.toLowerCase()[0]) {
      return -1;
    } else if (b.name.toLowerCase()[0] === searchValue.toLowerCase()[0]) {
      return 1;
    }
    return 0;
  }

  useEffect(() => {
    const v = searchValue.toLowerCase();
    if (searchValue === "") return;
    const result = [];

    products.forEach((item) => {
      if (item.name.toLowerCase().includes(v)) {
        result.push(item);
      }
    });
    result.sort(sorting);

    setFilteredProducts(result);
  }, [searchValue]);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

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

  const input = document.getElementById("input-search");
  input?.addEventListener(
    "keypress",
    function (e) {
      if (e.key === "Enter") {
        history.push(`/?search=${searchValue.split(" ").join("+")}`);
        setShowSearch(false);
      }
    },
    { once: true }
  );

  return (
    <div className='Navbar'>
      {/* start of search*/}

      <div
        style={{
          width: "200%",
          height: "91vh",
          backgroundColor: "black",
          opacity: 0.4,
          position: "absolute",
          marginTop: "9vh",
          display: showSearch ? "" : "none",
        }}
        onClick={() => setShowSearch(false)}
      ></div>

      <div
        style={{
          height: "auto",
          width: "34.5%",
          backgroundColor: "white",
          zIndex: 100,
          position: "absolute",
          top: 100,
          left: 110,
          borderRadius: "10px 10px 10px 10px",
          display: showSearch ? "" : "none",
        }}
      >
        {searchValue === "" ? (
          common.map((item) => (
            <a href={`/?search=${item}`}>
              <div
                className='search-common-results'
                style={{
                  borderBottom:
                    item === common[common.length - 1]
                      ? ""
                      : "1px solid gainsboro",
                  marginTop: item === common[0] ? "8px" : "",
                  paddingTop: "10px",
                  paddingBottom: "10px",
                  marginBottom: item === common[common.length - 1] ? "8px" : "",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    height: "40px",
                  }}
                >
                  <img
                    src='https://cdn-icons-png.flaticon.com/128/54/54481.png'
                    style={{
                      width: "24px",
                      width: "24px",
                      marginRight: "15px",
                      marginLeft: "15px",
                      paddingTop: "5px",
                    }}
                  />
                  <div style={{ paddingTop: "5px" }}>{item}</div>
                </div>
              </div>
            </a>
          ))
        ) : !filteredProducts.length ? (
          <a href={`/?search=${searchValue}`}>
            <div
              className='search-common-results'
              style={{
                borderBottom: "1px solid gainsboro",
                marginTop: "8px",
                paddingTop: "10px",
                paddingBottom: "10px",
                marginBottom: "8px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  height: "40px",
                }}
              >
                <img
                  src='https://cdn-icons-png.flaticon.com/128/54/54481.png'
                  style={{
                    width: "24px",
                    width: "24px",
                    marginRight: "15px",
                    marginLeft: "15px",
                    paddingTop: "5px",
                  }}
                />
                <div style={{ paddingTop: "5px" }}>{searchValue}</div>
              </div>
            </div>
          </a>
        ) : (
          filteredProductsFour.map((item) => (
            <a href={`/allsnacks/${item.id}`}>
              <div
                className='search-common-results'
                style={{
                  borderBottom:
                    item ===
                    filteredProductsFour[filteredProductsFour.length - 1]
                      ? ""
                      : "1px solid gainsboro",
                  marginTop: item === filteredProductsFour[0] ? "8px" : "",
                  paddingTop: "10px",
                  paddingBottom: "10px",
                  marginBottom:
                    item ===
                    filteredProductsFour[filteredProductsFour.length - 1]
                      ? "8px"
                      : "",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    height: "40px",
                  }}
                >
                  <img
                    src='https://cdn-icons.flaticon.com/png/128/859/premium/859415.png?token=exp=1660864379~hmac=4c1a2df2a908caa9a6c7f48ccc292e7e'
                    style={{
                      width: "24px",
                      width: "24px",
                      marginRight: "15px",
                      marginLeft: "15px",
                      paddingTop: "5px",
                    }}
                  />
                  <div style={{ paddingTop: "5px" }}>{item.name}</div>
                </div>
              </div>
            </a>
          ))
        )}
      </div>

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
              marginLeft: "2%",
              alignItems: "center",
              width: "50%",
            }}
          >
            <div
              className='Nav--Logo'
              style={{ marginRight: "30px", height: "30px" }}
            >
              <a href='/' style={{ textDecoration: "none", color: "white" }}>
                <img
                  src='https://cdn.discordapp.com/attachments/779278654714675232/1001654225819934801/logocropped.png'
                  alt='logo'
                  width={37}
                />
              </a>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                borderRadius: "45px",
                backgroundColor: "whitesmoke",
                height: "60px",
                alignItems: "center",
                width: "70%",
              }}
              onClick={() => setShowSearch(true)}
            >
              <img
                src='https://cdn-icons-png.flaticon.com/128/54/54481.png'
                style={{
                  width: "28px",
                  width: "28px",
                  marginLeft: "20px",
                  marginRight: "15px",
                }}
              />
              <input
                style={{
                  height: "40px",
                  width: "85%",
                  border: "none",
                  backgroundColor: "transparent",
                }}
                placeholder='Search Bullseye'
                type='text'
                className='input-nooutline-focus'
                onChange={(e) => setSearchValue(e.target.value)}
                id='input-search'
              />
            </div>
          </div>

          <div style={{ flexGrow: 1.2 }} />
          <a href='/bullseye' style={{ position: "relative", right: "6%" }}>
            <div
              style={{
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
          <div style={{ flexGrow: 100 }} />
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
            {userId.isAdmin ? (
              <div className='Nav--Login'>
                <a
                  href='/admin'
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Admin
                </a>
              </div>
            ) : null}
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
