import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllAdminOrders } from "../../store/adminOrders";
import Navbar from "../Navbar/Navbar";
import "./Admin.css";
import AdminOrders from "./AdminOrders";

const AdminMain = () => {
  const dispatch = useDispatch();

  const userId = useSelector((state) => state.auth);
  if (!userId.isAdmin || !userId.id) {
    return (
      <>
        <Navbar />
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            height: "100vh",
            alignItems: "center",
          }}
        >
          Access Denied
        </div>
      </>
    );
  }

  const [tab, setTab] = useState(1);

  //ADMINORDERS
  const [selectedOrder, setSelectedOrder] = useState(null);

  const allOrders = useSelector((state) => state.adminOrders);
  console.log(allOrders);

  useEffect(() => {
    dispatch(fetchAllAdminOrders());
  }, []);

  return (
    <div>
      <Navbar />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: "60px",
          marginLeft: "70px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginRight: "40px",
          }}
        >
          <div
            className='tab-admin'
            style={{
              color: tab === 1 ? "black" : "gainsboro",
              textDecoration: tab === 1 ? "underline" : "none",
            }}
            onClick={() => (tab === 1 ? setSelectedOrder(null) : setTab(1))}
          >
            Orders
          </div>
          <div
            className='tab-admin'
            style={{
              color: tab === 2 ? "black" : "gainsboro",
              textDecoration: tab === 2 ? "underline" : "none",
            }}
            onClick={() => setTab(2)}
          >
            Users
          </div>
          <div
            className='tab-admin'
            style={{
              color: tab === 3 ? "black" : "gainsboro",
              textDecoration: tab === 3 ? "underline" : "none",
            }}
            onClick={() => setTab(3)}
          >
            Products
          </div>
        </div>
        <div style={{ width: "95%" }}>
          {tab === 1 ? (
            <AdminOrders
              allOrders={allOrders}
              selectedOrder={selectedOrder}
              setSelectedOrder={setSelectedOrder}
            />
          ) : (
            "hi"
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminMain;
