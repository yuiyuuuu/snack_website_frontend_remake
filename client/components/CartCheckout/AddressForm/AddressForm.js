import React from "react";
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

const AddressForm = () => {
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
        <TextField required label='First Name' />
        <TextField required label='Last Name' />
        <TextField required label='Address' style={{ width: "100%" }} />
        <TextField required label='City' style={{ width: "33%" }} />
        <TextField required label='State' style={{ width: "33%" }} />
        <TextField required label='Zip Code' style={{ width: "33%" }} />
      </Grid>
    </form>
  );
};

export default AddressForm;
