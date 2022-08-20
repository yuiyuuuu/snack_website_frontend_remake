import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllAdminOrders } from "../../store/adminOrders";
import Navbar from "../Navbar/Navbar";
import "./Admin.css";
import AdminOrders from "./AdminOrders";
import AdminUsers from "./AdminUsers";
import { fetchAllUsers } from "../../store";
import AdminProducts from "./AdminProducts";
import AdminMessages from "./AdminMessages";
import { fetchProducts } from "../../store/Snacks";
import { _updateProduct, _createProduct } from "../../store/Snacks";
import axios from "axios";

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
  const [allCategories, setAllCategories] = useState([]);

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
  const [errorAddForm, setErrorAddForm] = useState(null);

  const [add, setAdd] = useState(false);
  const [productName, setProductName] = useState("");
  const [productQuantity, setProductQuantity] = useState(null);
  const [productCategory, setProductCategory] = useState("Salty");
  const [productPrice, setProductPrice] = useState(null);
  const [productImage, setProductImage] = useState("");
  const [productDescription, setProductDescription] = useState("");

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

  const handleSubmitAddProduct = () => {
    setErrorAddForm(null);
    if (!isValidHttpUrl(productImage)) {
      setErrorAddForm("Image URL must be a valid URL");
      return;
    }

    const product = {
      name: productName,
      desc: productDescription,
      price: Number(productPrice),
      quantity: Number(productQuantity),
      photoURL: productImage,
      productCategoryId: allCategories.find(
        (item) => item.type === productCategory
      ).id,
      display: true,
    };
    dispatch(_createProduct(product));

    setErrorAddForm(null);
    setAdd(null);
    setProductName("");
    setProductDescription("");
    setProductPrice(null);
    setProductQuantity(null);
    setProductCategory(1);
    setProductImage("");
  };

  useEffect(() => {
    dispatch(fetchAllAdminOrders());
  }, []);

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, []);

  useEffect(async () => {
    dispatch(fetchProducts());
    const { data } = await axios.get("/api/products/productcategory");
    setAllCategories(data);
  }, []);

  return (
    <div>
      {/* beginning of add/edit products popup*/}
      <div
        style={{
          position: "fixed",
          width: "100%",
          height: "100%",
          display: edit || add ? "" : "none",
          backgroundColor: "gray",
          opacity: 0.8,
        }}
        onClick={() => {
          setEdit(null);
          setAdd(null);
        }}
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
            value={edit?.cat?.type}
            onChange={(e) =>
              setEdit({
                ...edit,
                productCategoryId: allCategories.find(
                  (item) => item.type === e.target.value
                )?.id,
                cat: allCategories.find((item) => item.type === e.target.value),
              })
            }
          >
            <option value={"Salty"}>Salty</option>
            <option value={"Sweet"}>Sweet</option>
            <option value={"Refrigerated/Frozen"}>Frozen</option>
            <option value={"Healthy"}>Healthy</option>
            <option value={"Grocery"}>Grocery</option>
            <option value={"Drinks"}>Drinks</option>
            <option value={"Alcohol"}>Alcohol</option>
            <option value={"Cleaning"}>Cleaning</option>
            <option value={"Ice Cream"}>Ice Cream</option>
            <option value={"Quick Meals"}>Quick Meals</option>
            <option value={"Bath and Beauty"}>Bath and Beauty</option>
            <option value={"Health"}>Health</option>
            <option value={"Home and Office"}>Home and Office</option>
            <option value={"Pets"}>Pets</option>
            <option value={"Baby"}>Baby</option>
          </select>
        </div>
        <div style={{ color: "red", marginBottom: "10px" }}>
          {errorEditForm}
        </div>
        <div
          className='edit-but-adminproducts-form'
          onClick={() => handleSubmitEditProduct()}
          style={{
            pointerEvents:
              edit?.quantity === "" ||
              edit?.price === "" ||
              edit?.name === "" ||
              edit?.desc === "" ||
              edit?.photoURL === ""
                ? "none"
                : "",
          }}
        >
          Edit
        </div>
        <div onClick={() => setEdit(null)} style={{ cursor: "pointer" }}>
          Cancel
        </div>
      </div>

      <div
        style={{
          zIndex: 10,
          position: "fixed",
          backgroundColor: "white",
          width: "50%",
          height: "70%",
          left: "25%",
          top: "20%",
          display: add ? "flex" : "none",
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
          Add Product
        </div>
        <input
          type='text'
          id='input'
          className='Input-text-admin-edit'
          placeholder='Name'
          size='20'
          value={productName}
          style={{ width: "91%", marginBottom: "25px", marginTop: "15px" }}
          onChange={(e) => setProductName(e.target.value)}
        />

        <input
          type='text'
          id='input'
          className='Input-text-admin-edit'
          placeholder='Image URL'
          size='20'
          value={productImage}
          style={{ width: "91%", marginBottom: "25px", marginTop: "15px" }}
          onChange={(e) => setProductImage(e.target.value)}
        />

        <input
          type='text'
          id='input'
          className='Input-text-admin-edit'
          placeholder='Description'
          size='20'
          value={productDescription}
          style={{ width: "91%", marginBottom: "25px", marginTop: "15px" }}
          onChange={(e) => setProductDescription(e.target.value)}
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
            value={productQuantity}
            style={{ width: "31%", marginBottom: "25px", marginTop: "15px" }}
            onChange={(e) => {
              setProductQuantity(Number(e.target.value));
            }}
          />

          <input
            type='text'
            id='input'
            className='Input-text-admin-edit'
            placeholder='Price'
            size='20'
            value={productPrice}
            style={{
              width: "31%",
              marginBottom: "25px",
              marginTop: "15px",
            }}
            onChange={(e) => setProductPrice(e.target.value)}
          />
          <select
            style={{
              width: "31%",
              marginBottom: "25px",
              marginTop: "15px",
            }}
            value={productCategory}
            onChange={(e) => setProductCategory(e.target.value)}
          >
            <option value={"Salty"}>Salty</option>
            <option value={"Sweet"}>Sweet</option>
            <option value={"Refrigerated/Frozen"}>Frozen</option>
            <option value={"Healthy"}>Healthy</option>
            <option value={"Grocery"}>Grocery</option>
            <option value={"Drinks"}>Drinks</option>
            <option value={"Alcohol"}>Alcohol</option>
            <option value={"Cleaning"}>Cleaning</option>
            <option value={"Ice Cream"}>Ice Cream</option>
            <option value={"Quick Meals"}>Quick Meals</option>
            <option value={"Bath and Beauty"}>Bath and Beauty</option>
            <option value={"Health"}>Health</option>
            <option value={"Home and Office"}>Home and Office</option>
            <option value={"Pets"}>Pets</option>
            <option value={"Baby"}>Baby</option>
          </select>
        </div>
        <div style={{ color: "red", marginBottom: "10px" }}>{errorAddForm}</div>
        <div
          className='edit-but-adminproducts-form'
          onClick={() => handleSubmitAddProduct()}
          style={{
            pointerEvents:
              productName === "" ||
              productDescription === "" ||
              productImage === "" ||
              !productQuantity ||
              productQuantity === "" ||
              productPrice === "" ||
              !productPrice
                ? "none"
                : "",
          }}
        >
          Add
        </div>
        <div onClick={() => setAdd(false)} style={{ cursor: "pointer" }}>
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

          <div
            className='tab-admin'
            style={{
              color: tab === 4 ? "black" : "gainsboro",
              textDecoration: tab === 4 ? "underline" : "none",
            }}
            onClick={() => setTab(4)}
          >
            Messages
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
          ) : tab === 3 ? (
            <AdminProducts
              products={products}
              edit={edit}
              setEdit={setEdit}
              setAdd={setAdd}
            />
          ) : (
            <AdminMessages />
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminMain;
