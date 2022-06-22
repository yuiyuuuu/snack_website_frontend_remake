import React from "react";
import { Typography, Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const NoCartItemPage = () => {
  const history = useHistory();
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          padding: "25%",
          alignItems: "center",
        }}
      >
        <Typography align='center' style={{ marginBottom: "20px" }}>
          You have no items in your cart
        </Typography>

        <Button
          size='large'
          style={{ backgroundColor: "deepskyblue" }}
          onClick={() => history.push("/allsnacks")}
        >
          Shop
        </Button>
      </div>
    </>
  );
};

export default NoCartItemPage;
