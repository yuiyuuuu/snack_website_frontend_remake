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
import FormInput from "./FormInput";
import { FormProvider, useForm } from "react-hook-form";

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
  const methods = useForm();

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

    <FormProvider {...methods}>
      <form>
        <Grid container spacing={3}>
          <FormInput required name='firstname' label='First Name' />
          <FormInput required name='lastname' label='Last Name' />
        </Grid>
      </form>
    </FormProvider>
  );
};

export default AddressForm;
