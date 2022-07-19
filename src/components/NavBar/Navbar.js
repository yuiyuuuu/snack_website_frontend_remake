import React from "react";
import "./Navbar.css";
import "../../../assets/download.jpeg";

const Navbar = () => {
  return (
    <div className='Navbar'>
      <div className='Navbar--Container' style={{ justifyContent: "center" }}>
        <div
          style={{
            // marginRight: "10px",
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
            <img
              src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJAAAACQCAMAAADQmBKKAAAAM1BMVEWJz/D///+EzfB+y+++4/bT7Pno9fz2+/77/f7X7vnv+P3I5/ff8ful2fOX1PLE5fez3/X3rO41AAADNUlEQVR4nO1a2XKrMAx1LLAJYIf//9pCkoLkhUCvRTxzdR760AlwrH2xUgKBQCAQCAQCgUAgEAgEAoHgP4Ne8W0mCxcA76bmMQyPZnIK4Jus5m+7xtjutqKzpnHqS5w0uLa/JWBaD9dT0qqxKTYv9JO6lpKGJikcJKbmSinBtCOdVUoOLqKj1f0znQXtNXoDd0A8FwpJN0fpLJjYZQQH1fWLgVlGejzHZzYkVhnBaT4zI0YZ6bS+rBnvbXsfTdraBzYZQcqe7eD8M8fOgdC7IcVpYpKRdgl9OMAReebl2vhXjklG0envPk7sWvtIsT0LncjhrUunKx2HTg7D1lMonnxiiJMLg9IgOPX+oSGwpL64iMKM0Xz4QuiRTXER0frns1EEMjKF6QQCuh/QQOAEhdMstSAb8U02QeSZslYUxETqMxr8tLRBU1DbBw/5kiLSxCCowrQz70aoM46IiSqtbNonJo3PqhXlioOT9lxmTYXfZr8ZsSVkCwZH6mPoxdp3twAdYkQPUtDPwKD3WmxBEZ+ZEX4QO5op52fkvahK1olSg6gUhtxJ/g1EMZvGYgN6YVMa0VmXfvkfQF5r/fr/MIOuItpE4bFsi1k1qTyQ94YFQEo32PqKWTVxshFpLGHST90gneE2pVjG1w/01i1Mp2rsUDckWD+KEcK+shlIVEMmdEPMrFg/VB+hnMpyNsSusrRRJ/qiF1C5xGTUObc3IZX3T9jdPhMYc26GPswTGHOpg55/Be5TeVJHPrkmReT4k2u2/CAffAN3SFzlR7ZAU/AI6JBgw1ag5UvYmVGX5cNXwu4U+Qo8CjUjnQMTZyjau+62QdoPve062w+eDkQY26DdRnH+Mijvl797DxVtFD+10mkQPRceyPxl2EAL3OIz/dPjGBqiSo9jzg+sgmKp/MDq5EgvCOHlR3onh55hg8QxqT48Flbgwv0n076jssH5kdWCWlYLcaXNtVrYWb7A7/IltazmWr7Ut56qb4FX34qzviVwfWvy+i4S1HfVQlV3GUXVd11HVXeh6UmpritfT0rLpbixmktxb041XRvcWNVzsVIgEAgEAoFAIBAIBAKBQCAQXIsfoRQc9rxAXeoAAAAASUVORK5CYII='
              alt='logo'
              width={30}
            />
          </div>
          <div className='Nav--Home' style={{ marginRight: "30px" }}>
            Home
          </div>
          <div>Shop Button</div>
          <div style={{ flexGrow: 1 }} />
        </div>

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
            Profile
          </div>
          <div className='Nav--Cart' style={{ marginRight: "30px" }}>
            Cart
          </div>
          <div className='Nav--Login'>Login</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

// /allsnacks - displays all snacks
// /snack/id -displays one snack
// /checkout
