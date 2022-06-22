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
      <Grid container spacing={3} style={{ display: "flex" }}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            label='First Name'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            style={{ padding: "5px" }}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            label='Last Name'
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            required
            label='Address'
            style={{ width: "100%", marginTop: "-10px" }}
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </Grid>

        <div style={{ display: "flex" }}>
          <Grid item xs={6} sm={4}>
            <TextField
              required
              label='City'
              style={{ margin: "10px" }}
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </Grid>

          <Grid item xs={6} sm={4}>
            <TextField
              required
              label='State'
              value={state}
              onChange={(e) => setState(e.target.value)}
              style={{ margin: "10px" }}
            />
          </Grid>

          <Grid item xs={6} sm={4}>
            <TextField
              required
              label='Zip Code'
              value={zip}
              onChange={(e) => setZip(e.target.value)}
              style={{ margin: "10px" }}
            />
          </Grid>
        </div>
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
