import React from "react";
import { TextField, Grid } from "@material-ui/core";
import { useFormContext, Controller } from "react-hook-form";
import "./FormInputStyles.scss";

const html = (
  <div class='form__group field'>
    <input
      type='input'
      class='form__field'
      placeholder='Name'
      name='name'
      id='name'
      required
    />
    <label for='name' class='form__label'>
      Name
    </label>
  </div>
);

const FormInput = ({ name, label }) => {
  const { control } = useFormContext();
  return (
    <Grid item xs={12} sm={6}>
      <Controller
        as={html}
        control={control}
        fullWidth
        name={name}
        label={label}
        required
      />
    </Grid>
  );
};

export default FormInput;

//READ: THIS IS AN OLDER VERSION OF REACT HOOK FORMS. WE CAN CHANGE THIS TO THE LATEST VERSION LATER. I DO NOT KNOW HOW THE LATEST VERSION WORKS
//IF WE HAVE TIME, I WILL GO BACK TO THIS AND CHANGE IT -- JACK
