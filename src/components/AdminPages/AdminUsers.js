import { getByDisplayValue } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { _deleteUser, _updateAdminUser } from "../../store/users";

const AdminUsers = ({
  selectedUser,
  setSelectedUser,
  allUsers,
  setSelectedOrder,
  setError,
  error,
}) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    if (selectedUser.isAdmin) {
      setError("Not authorized to delete this user");
      return;
    }
    dispatch(_deleteUser(selectedUser.id));
    setSelectedUser(null);
  };

  const handleGiveAdmin = () => {
    if (selectedUser.id < 5) {
      setError("Not authorized to remove admin from this user");
      return;
    }
    dispatch(_updateAdminUser(selectedUser.id));
    setSelectedUser(null);
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", marginRight: "20%" }}
    >
      {!selectedUser ? (
        <div>
          {allUsers.map((user) => (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
              className='user-admin'
              onClick={() => setSelectedUser(user)}
            >
              <div
                key={user.id}
                style={{
                  fontSize: "20px",
                  fontFamily: "freemono",
                  marginBottom: "10px",
                  width: "25%",
                }}
              >
                User #{user.id}
              </div>
              <div style={{ width: "25%" }}>
                {user.firstName + " " + user.lastName}
              </div>
              <div style={{ width: "25%" }}>{user.email}</div>
              <div style={{ width: "25%" }}>
                {user.isAdmin ? "Admin-true" : "Admin-false"}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <div
            style={{
              fontSize: "20px",
              fontFamily: "freemono",
              marginBottom: "3px",
            }}
          >
            User #{selectedUser.id}
          </div>
          <div
            style={{
              fontSize: "20px",
              fontFamily: "freemono",
              marginBottom: "3px",
            }}
          >
            {selectedUser.firstName + " " + selectedUser.lastName}
          </div>
          <div
            style={{
              fontSize: "20px",
              fontFamily: "freemono",
              marginBottom: "3px",
            }}
          >
            {selectedUser.email}
          </div>
          <div style={{ marginTop: "20px" }}>
            <div
              style={{
                fontSize: "20px",
                fontFamily: "freemono",
                marginBottom: "5px",
              }}
            >
              Orders
            </div>
            {selectedUser.order_details.length !== 0 ? (
              selectedUser.order_details.map((order) => (
                <div
                  style={{
                    fontSize: "20px",
                    fontFamily: "freemono",
                    cursor: "pointer",
                    textDecoration: "underline",
                    marginBottom: "5px",
                  }}
                  onClick={() => setSelectedOrder(order)}
                >
                  Order #{order.id}
                </div>
              ))
            ) : (
              <div>This user has no orders</div>
            )}
          </div>
          <div
            style={{
              color: "red",
              marginTop: "30px",
              display: error ? "" : "none",
            }}
          >
            {error}
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div
              className='delete-button-adminusers'
              onClick={() => handleDelete()}
            >
              Delete User
            </div>
            <div
              className='update-button-adminusers'
              style={{ marginLeft: "15px" }}
              onClick={() => handleGiveAdmin()}
            >
              {selectedUser.isAdmin ? "Remove Admin" : "Give Admin"}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminUsers;
