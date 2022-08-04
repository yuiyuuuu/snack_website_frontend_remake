import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllAddresses } from "../../store/useraddresses";
import { deleteAnAddress } from "../../store/useraddresses";
import "./myaccount.css";

const Addresses = ({ setShowAddForm }) => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth);
  const addresses = useSelector((state) => state.addressReducer);

  const deleteAddress = (itemid) => {
    dispatch(deleteAnAddress(userId.id, itemid));
  };

  useEffect(() => {
    const initialFetch = () => {
      dispatch(fetchAllAddresses(userId.id));
    };
    initialFetch();
  }, [userId]);

  console.log(addresses);
  return (
    <>
      <div
        style={{
          width: "60%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            fontSize: "20px",
            fontFamily: "freemono",
          }}
        >
          Your Addresses
        </div>
        {addresses.map((item) => (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "25px",
            }}
            key={item.id}
          >
            <div style={{ fontSize: "20px", fontFamily: "freemono" }}>
              {item.firstName + " " + item.lastName}
            </div>
            <div style={{ fontSize: "20px", fontFamily: "freemono" }}>
              {item.address}
            </div>
            <div style={{ fontSize: "20px", fontFamily: "freemono" }}>
              {item.city +
                " " +
                item.state.slice(0, 2).toUpperCase() +
                " " +
                item.zip}
            </div>
            <div
              className='remove-addresses-button'
              onClick={() => {
                deleteAddress(item.id);
              }}
            >
              Remove
            </div>
          </div>
        ))}
        <div
          className='add-address-button'
          onClick={() => setShowAddForm(true)}
        >
          Add Address
        </div>
      </div>
    </>
  );
};

export default Addresses;
