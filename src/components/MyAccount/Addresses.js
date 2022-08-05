import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllAddresses } from "../../store/useraddresses";
import { deleteAnAddress } from "../../store/useraddresses";
import "./myaccount.css";
import { editEmail as editingEmail } from "../../store/auth";

const Addresses = ({ setShowAddForm }) => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth);
  const addresses = useSelector((state) => state.addressReducer);

  const [showEdit, setShowEdit] = useState(false);
  const [editEmail, setEditEmail] = useState("");

  const deleteAddress = (itemid) => {
    dispatch(deleteAnAddress(userId.id, itemid));
  };

  const handleEditEmail = () => {
    dispatch(editingEmail(userId.id, editEmail));
    setShowEdit(false);
  };

  useEffect(() => {
    const initialFetch = () => {
      dispatch(fetchAllAddresses(userId.id));
    };
    initialFetch();
  }, [userId]);

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
            fontFamily: "freemono",
            fontSize: "20px",
            marginBottom: "10px",
          }}
        >
          Your Email
        </div>
        {!showEdit ? (
          <>
            <div
              style={{
                fontSize: "20px",
                fontFamily: "freemono",
                marginBottom: "15px",
              }}
            >
              {userId.email}
            </div>
            <div
              style={{
                fontSize: "20px",
                fontFamily: "freemono",
                marginBottom: "25px",
                cursor: "pointer",
                width: "60px",
              }}
              onClick={() => setShowEdit(true)}
            >
              Edit
            </div>
          </>
        ) : (
          <div>
            <input
              type='text'
              id='input'
              className='Input-text-checkout-email'
              placeholder='Email'
              size='20'
              style={{
                width: "44%",
                marginBottom: "5px",
                marginRight: "3%",
              }}
              onChange={(e) => setEditEmail(e.target.value)}
            />
            <div
              style={{
                fontFamily: "freemono",
                fontSize: "20px",
                marginBottom: "5px",
                cursor: "pointer",
                width: "60px",
                pointerEvents: editEmail !== "" ? "" : "none",
              }}
              onClick={() => handleEditEmail()}
            >
              Save
            </div>
            <div
              style={{
                fontFamily: "freemono",
                fontSize: "20px",
                marginBottom: "25px",
                cursor: "pointer",
                width: "60px",
              }}
              onClick={() => setShowEdit(false)}
            >
              Cancel
            </div>
          </div>
        )}
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
          <a className='animation-underline'>Add Address</a>
        </div>
      </div>
    </>
  );
};

export default Addresses;
