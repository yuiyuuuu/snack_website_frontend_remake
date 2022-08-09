import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllAdminOrders } from "../../store/adminOrders";
import Navbar from "../Navbar/Navbar";
import "./Admin.css";
import AdminOrders from "./AdminOrders";
import AdminUsers from "./AdminUsers";
import { fetchAllUsers } from "../../store";
import AdminProducts from "./AdminProducts";
import { fetchProducts } from "../../store/Snacks";

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

  //ADMINUSERS
  const allUsers = useSelector((state) => state.users);
  const [selectedUser, setSelectedUser] = useState(null);
  const [error, setError] = useState(false);

  //ADMINPRODUCTS
  const { products } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchAllAdminOrders());
  }, []);

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, []);

  useEffect(() => {
    dispatch(fetchProducts());
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
            onClick={() => {
              setSelectedOrder(null);
              setTab(1);
              setSelectedUser(null);
              setError(false);
            }}
          >
            Orders
          </div>
          <div
            className='tab-admin'
            style={{
              color: tab === 2 ? "black" : "gainsboro",
              textDecoration: tab === 2 ? "underline" : "none",
            }}
            onClick={() => {
              setSelectedUser(null);
              setTab(2);
              setSelectedOrder(null);
              setError(false);
            }}
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
        <div style={{ width: "95%", marginBottom: "50px" }}>
          {tab === 1 ? (
            <AdminOrders
              allOrders={allOrders}
              selectedOrder={selectedOrder}
              setSelectedOrder={setSelectedOrder}
            />
          ) : tab === 2 && !selectedOrder ? (
            <AdminUsers
              selectedUser={selectedUser}
              setSelectedUser={setSelectedUser}
              allUsers={allUsers}
              setSelectedOrder={setSelectedOrder}
              setError={setError}
              error={error}
            />
          ) : tab === 2 && selectedOrder ? (
            <AdminOrders
              allOrders={allOrders}
              selectedOrder={selectedOrder}
              setSelectedOrder={setSelectedOrder}
            />
          ) : (
            <AdminProducts products={products} />
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminMain;
