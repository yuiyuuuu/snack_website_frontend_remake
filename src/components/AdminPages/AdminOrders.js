import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { cancelOrder } from "../../store/adminOrders";
import states from "../Checkout/states";

const AdminOrders = ({ allOrders, selectedOrder, setSelectedOrder }) => {
  const dispatch = useDispatch();

  const [total, setTotal] = useState(0);

  const calculateTotal = () => {
    if (!selectedOrder) return;
    let total = 0;
    selectedOrder.order_items.forEach((item) => {
      const itemTotal = item.product.price * item.quantity;
      total += itemTotal;
    });

    setTotal(total);
  };

  const handleCancelOrder = (orderid) => {
    dispatch(cancelOrder(orderid));
    setSelectedOrder(null);
  };

  useEffect(() => {
    calculateTotal();
  }, [selectedOrder]);

  if (allOrders.length === 0) {
    return <div>No orders in database</div>;
  }

  return (
    <div
      style={{ marginRight: "20%", display: "flex", flexDirection: "column" }}
    >
      {selectedOrder ? (
        <div styl={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div
              style={{
                fontFamily: "freemono",
                fontSize: "20px",
                marginBottom: "2px",
              }}
            >
              Order #{selectedOrder.id}
            </div>
            <div style={{ flexGrow: 1 }} />
            <div
              style={{
                textDecoration: "underline",
                fontFamily: "freemono",
                fontSize: "20px",
                cursor: "pointer",
              }}
              onClick={() => setSelectedOrder(null)}
            >
              Go Back
            </div>
          </div>
          <div
            style={{
              fontFamily: "freemono",
              fontSize: "20px",
              marginBottom: "2px",
            }}
          >
            {selectedOrder.createdAt.slice(5, 7) +
              "/" +
              selectedOrder.createdAt.slice(8, 10) +
              "/" +
              selectedOrder.createdAt.slice(0, 4)}
          </div>
          <div
            style={{
              fontFamily: "freemono",
              fontSize: "20px",
              marginBottom: "2px",
            }}
          >
            {selectedOrder.email}
          </div>
          <div
            style={{
              marginTop: "10px",
              fontFamily: "freemono",
              fontSize: "20px",
            }}
          >
            {selectedOrder.firstName + " " + selectedOrder.lastName}
          </div>
          <div style={{ fontFamily: "freemono", fontSize: "20px" }}>
            {selectedOrder.address}
          </div>
          <div
            style={{
              fontFamily: "freemono",
              fontSize: "20px",
              marginBottom: "15px",
            }}
          >
            {selectedOrder.city +
              " " +
              states.find((s) => s.name === selectedOrder.state).abbreviation +
              " " +
              selectedOrder.zip}
          </div>
          {selectedOrder.order_items.map((item) => (
            <div
              style={{ flexDirection: "row", display: "flex", width: "100%" }}
            >
              <img
                src={item.product.photoURL}
                style={{ height: "80px", width: "80px" }}
              />
              <div
                style={{
                  width: "60%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <div style={{ fontSize: "16px" }}>{item.product.name}</div>
                <div
                  style={{
                    fontSize: "14px",
                    color: "darkgray",
                    marginTop: "5px",
                  }}
                >
                  Quantity:{item.quantity}
                </div>
              </div>
              <div style={{ flexGrow: 1 }} />
              <div
                style={{
                  alignSelf: "center",
                  fontFamily: "freemono",
                  fontSize: "20px",
                }}
              >
                $
                {Math.round(item.product.price * item.quantity * 100) % 10 === 0
                  ? Math.round(item.product.price * item.quantity * 100) / 100 +
                    "0"
                  : Math.round(item.product.price * item.quantity * 100) / 100}
              </div>
            </div>
          ))}
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ flexGrow: 1 }} />
            <div
              style={{
                fontFamily: "freemono",
                fontSize: "20px",
                marginBottom: "50px",
              }}
            >
              Total: $
              {Math.round(total * 100) % 10 === 0 && total !== 0
                ? Math.round(total * 100) / 100 + "0"
                : Math.round(total * 100) / 100}
            </div>
          </div>
          <div
            className='cancel-button-admin'
            onClick={() => handleCancelOrder(selectedOrder.id)}
          >
            Cancel
          </div>
        </div>
      ) : (
        <div>
          {allOrders.map((item) => (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                marginBottom: "20px",
                justifyContent: "space-between",
              }}
              key={item.id}
              className='div-single-admin-order'
              onClick={() => setSelectedOrder(item)}
            >
              <div style={{ width: "33%" }}>Order #{item.id}</div>
              <div style={{ width: "33%" }}>{item.email}</div>
              <div style={{ width: "33%" }}>
                $
                {Math.round(item.total * 100) % 10 === 0 && item.total !== 0
                  ? Math.round(item.total * 100) / 100 + "0"
                  : Math.round(item.total * 100) / 100}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminOrders;
