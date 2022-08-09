import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { _deleteProduct, _restoreProduct } from "../../store/Snacks";
import "./Admin.css";

const AdminProducts = ({ products, edit, setEdit }) => {
  const dispatch = useDispatch();
  const [filtered, setFiltered] = useState([]);
  const [noDisplayProducts, setNoDisplayProducts] = useState([]);

  const handleDelete = (id) => {
    dispatch(_deleteProduct(id));
  };

  useEffect(() => {
    const filter = products.filter((product) => product.display);
    const noDisplay = products.filter((product) => !product.display);
    setFiltered(filter);
    setNoDisplayProducts(noDisplay);
  }, [products]);
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <table style={{ width: "95%" }}>
          <tr>
            <td
              style={{
                width: "100px",
                textAlign: "center",
              }}
            >
              Image
            </td>
            <td style={{ width: "auto", textAlign: "center" }}>Name</td>
            <td style={{ textAlign: "center" }}>Quantity</td>
            <td style={{ textAlign: "center" }}>Category</td>
          </tr>
          {filtered.map((product) => (
            <tr>
              <td style={{ textAlign: "center" }}>
                <img
                  src={product.photoURL}
                  style={{
                    width: "80px",
                    height: "80px",
                    marginTop: "10px",
                    marginBottom: "10px",
                  }}
                />
              </td>
              <td style={{ width: "40%", textAlign: "center" }}>
                {product.name}
              </td>
              <td style={{ textAlign: "center", width: "13%" }}>
                {product.quantity}
              </td>
              <td style={{ textAlign: "center" }}>
                {product.productCategoryId === 1
                  ? "Salty"
                  : product.productCategoryId === 2
                  ? "Frozen"
                  : product.productCategoryId === 3
                  ? "Sweet"
                  : "Healthy"}
              </td>
              <td>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                  }}
                >
                  <div
                    className='edit-but-adminproducts'
                    onClick={() => setEdit(product)}
                  >
                    Edit
                  </div>
                  <div
                    className='delete-but-adminproducts'
                    onClick={() => handleDelete(product.id)}
                  >
                    Delete
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </table>
        <div
          style={{
            fontFamily: "freemono",
            fontSize: "23px",
            fontWeight: "600",
            marginTop: "35px",
            marginBottom: "20px",
          }}
        >
          Delete Products
        </div>
        <table style={{ width: "95%" }}>
          <tr>
            <td
              style={{
                width: "100px",
                textAlign: "center",
              }}
            >
              Image
            </td>
            <td style={{ width: "auto", textAlign: "center" }}>Name</td>
            <td style={{ textAlign: "center" }}>Quantity</td>
            <td style={{ textAlign: "center" }}>Category</td>
          </tr>
          {noDisplayProducts.map((product) => (
            <tr>
              <td style={{ textAlign: "center" }}>
                <img
                  src={product.photoURL}
                  style={{
                    width: "80px",
                    height: "80px",
                    marginTop: "10px",
                    marginBottom: "10px",
                  }}
                />
              </td>
              <td style={{ width: "40%", textAlign: "center" }}>
                {product.name}
              </td>
              <td style={{ textAlign: "center", width: "13%" }}>
                {product.quantity}
              </td>
              <td style={{ textAlign: "center" }}>
                {product.productCategoryId === 1
                  ? "Salty"
                  : product.productCategoryId === 2
                  ? "Frozen"
                  : product.productCategoryId === 3
                  ? "Sweet"
                  : "Healthy"}
              </td>
              <td>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                  }}
                >
                  <div
                    className='edit-but-adminproducts'
                    onClick={() => dispatch(_restoreProduct(product.id))}
                  >
                    Restore
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </>
  );
};

export default AdminProducts;
