import React, { useState } from "react";
import {
  Typography,
  TextField,
  Button,
  Select,
  MenuItem,
  Grid,
  InputLabel,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  inputFields: {
    padding: "10px",
  },
  inputFieldsLarge: {
    width: "100%",
    padding: "10px",
  },
  select: {
    width: "33%",
    padding: "10px",
  },
  root: {
    display: "flex",
  },
});

const AddressForm = ({
  setFirstName,
  setLastName,
  setAddress,
  setCity,
  setState,
  setZip,
  firstName,
  lastName,
  address,
  city,
  state,
  zip,
}) => {
  const classes = useStyles();

  return (
    // <div classname={classes.root}>
    //   <Grid container spacing={3}>
    //     {/* <TextField
    //       required
    //       label='First Name'
    //       className={classes.inputFields}
    //     /> */}

    //     <TextField required label='Last Name' className={classes.inputFields} />
    //     <TextField
    //       required
    //       label='Address'
    //       className={classes.inputFieldsLarge}
    //     />
    //     <TextField required label='City' className={classes.inputFields} />
    //   </Grid>

    //   <InputLabel style={{ marginTop: "10px" }}>Country</InputLabel>
    //   <Select className={classes.select} label='country'>
    //     <MenuItem value={"united states"}>United States</MenuItem>
    //   </Select>
    // </div>

    <form>
      <Grid container spacing={3}>
        <TextField
          required
          label='First Name'
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <TextField
          required
          label='Last Name'
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <TextField
          required
          label='Address'
          style={{ width: "100%" }}
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <TextField
          required
          label='City'
          style={{ width: "33%" }}
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <TextField
          required
          label='State'
          style={{ width: "33%" }}
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
        <TextField
          required
          label='Zip Code'
          style={{ width: "33%" }}
          value={zip}
          onChange={(e) => setZip(e.target.value)}
        />
      </Grid>
    </form>
  );
};

export default AddressForm;
/*setFirstName,
  setLastName,
  setAddress,
  setCity,
  setState,
  setZip,
  firstName,
  lastName,
  address,
  city,
  state,
  zip,*/
