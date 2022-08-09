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
import { _updateProduct } from "../../store/Snacks";

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
  const [edit, setEdit] = useState(null);
  const [errorEditForm, setErrorEditForm] = useState(null);

  function isValidHttpUrl(string) {
    let url;

    try {
      url = new URL(string);
    } catch (_) {
      return false;
    }

    return url.protocol === "http:" || url.protocol === "https:";
  }

  const handleSubmitEditProduct = () => {
    if (!isValidHttpUrl(edit.photoURL)) {
      setErrorEditForm("Image URL must be a valid URL");
      return;
    }

    dispatch(_updateProduct({ ...edit, price: Number(edit.price) }));
    setErrorEditForm(null);
    setEdit(null);
  };

  useEffect(() => {
    dispatch(fetchAllAdminOrders());
  }, []);

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, []);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  console.log(edit);
  return (
    <div>
      {/* beginning of add/edit products popup*/}
      <div
        style={{
          position: "fixed",
          width: "100%",
          height: "100%",
          display: edit ? "" : "none",
          backgroundColor: "gray",
          opacity: 0.8,
        }}
        onClick={() => setEdit(null)}
      />

      <div
        style={{
          zIndex: 10,
          position: "fixed",
          backgroundColor: "white",
          width: "50%",
          height: "70%",
          left: "25%",
          top: "20%",
          display: edit ? "flex" : "none",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            fontSize: "20px",
            fontFamily: "freemono",
            marginTop: "20px",
          }}
        >
          Edit Product
        </div>

        <div
          style={{
            fontSize: "20px",
            fontFamily: "freemono",
            marginTop: "5px",
          }}
        >
          Product #{edit ? edit.id : ""}
        </div>
        <input
          type='text'
          id='input'
          className='Input-text-admin-edit'
          placeholder='Name'
          size='20'
          value={edit ? edit.name : ""}
          style={{ width: "91%", marginBottom: "25px", marginTop: "15px" }}
          onChange={(e) => setEdit({ ...edit, name: e.target.value })}
        />

        <input
          type='text'
          id='input'
          className='Input-text-admin-edit'
          placeholder='Image URL'
          size='20'
          value={edit ? edit.photoURL : ""}
          style={{ width: "91%", marginBottom: "25px", marginTop: "15px" }}
          onChange={(e) => setEdit({ ...edit, photoURL: e.target.value })}
        />

        <input
          type='text'
          id='input'
          className='Input-text-admin-edit'
          placeholder='Description'
          size='20'
          value={edit ? edit.desc : ""}
          style={{ width: "91%", marginBottom: "25px", marginTop: "15px" }}
          onChange={(e) => setEdit({ ...edit, desc: e.target.value })}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "91%",
            justifyContent: "space-between",
          }}
        >
          <input
            type='text'
            id='input'
            className='Input-text-admin-edit'
            placeholder='Quantity'
            size='20'
            value={edit ? edit.quantity : ""}
            style={{ width: "31%", marginBottom: "25px", marginTop: "15px" }}
            onChange={(e) =>
              setEdit({ ...edit, quantity: Number(e.target.value) })
            }
          />

          <input
            type='text'
            id='input'
            className='Input-text-admin-edit'
            placeholder='Price'
            size='20'
            value={edit ? edit.price : ""}
            style={{
              width: "31%",
              marginBottom: "25px",
              marginTop: "15px",
            }}
            onChange={(e) => setEdit({ ...edit, price: e.target.value })}
          />
          <select
            style={{
              width: "31%",
              marginBottom: "25px",
              marginTop: "15px",
            }}
            value={edit ? edit.productCategoryId : ""}
            onChange={(e) =>
              setEdit({ ...edit, productCategoryId: Number(e.target.value) })
            }
          >
            <option value={1}>Salty</option>
            <option value={3}>Sweet</option>
            <option value={2}>Frozen</option>
            <option value={4}>Healthy</option>
          </select>
        </div>
        <div style={{ color: "red", marginBottom: "10px" }}>
          {errorEditForm}
        </div>
        <div
          className='edit-but-adminproducts-form'
          onClick={() => handleSubmitEditProduct()}
        >
          Edit
        </div>
        <div onClick={() => setEdit(null)} style={{ cursor: "pointer" }}>
          Cancel
        </div>
      </div>
      {/*end of edit/add product form*/}

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
            <AdminProducts products={products} edit={edit} setEdit={setEdit} />
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminMain;
