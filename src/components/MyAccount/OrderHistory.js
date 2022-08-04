import React, { useEffect, useState } from "react";
import "./myaccount.css";

const OrderHistory = ({ orders }) => {
  const [selectedOrder, setSelectedOrder] = useState(null);
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

  useEffect(() => {
    calculateTotal();
  }, [selectedOrder]);

  return (
    <div className='orderhistory-parent'>
      {orders.length === 0 ? (
        <div>You have no orders</div>
      ) : !selectedOrder ? (
        <div>
          {orders.map((order) => (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                fontFamily: "freemono",
                fontSize: "20px",
                cursor: "pointer",
                textDecoration: "underline",
                marginBottom: "10px",
              }}
              key={order.id}
              onClick={() => setSelectedOrder(order)}
            >
              Order #{order.id}
            </div>
          ))}
        </div>
      ) : (
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              fontFamily: "freemono",
              fontSize: "22px",
              display: "flex",
              flexDirection: "row",
            }}
          >
            Order #{selectedOrder.id}
            <div style={{ flexGrow: 1 }} />
            <div
              style={{
                fontFamily: "freemono",
                fontSize: "19px",
                textDecoration: "underline",
                cursor: "pointer",
              }}
              onClick={() => setSelectedOrder(null)}
            >
              All Orders
            </div>
          </div>
          <div style={{ fontFamily: "freemono", fontSize: "20px" }}>
            {selectedOrder.createdAt.slice(5, 7) +
              "/" +
              selectedOrder.createdAt.slice(8, 10) +
              "/" +
              selectedOrder.createdAt.slice(0, 4)}
          </div>
          <div
            style={{
              marginTop: "10px",
              fontFamily: "freemono",
              fontSize: "18px",
            }}
          >
            {selectedOrder.firstName + " " + selectedOrder.lastName}
          </div>
          <div style={{ fontFamily: "freemono", fontSize: "18px" }}>
            {selectedOrder.address}
          </div>
          <div
            style={{
              fontFamily: "freemono",
              fontSize: "18px",
              marginBottom: "15px",
            }}
          >
            {selectedOrder.city +
              " " +
              selectedOrder.state.slice(0, 2).toUpperCase() +
              " " +
              selectedOrder.zip}
          </div>
          {selectedOrder.order_items.map((item) => (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                marginBottom: "50px",
              }}
              key={item.id}
            >
              <img
                src={item.product.photoURL}
                alt='item_image'
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
          <div
            style={{
              alignSelf: "flex-end",
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
      )}
    </div>
  );
};

export default OrderHistory;

/* <div style={{ flexGrow: 1 }} />
          <div style={{ fontFamily: "freemono", fontSize: "20px" }}>
            {order.createdAt.slice(5, 7) +
              "/" +
              order.createdAt.slice(8, 10) +
              "/" +
              order.createdAt.slice(0, 4)}
          </div>*/
