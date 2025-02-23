import { TextField } from "@mui/material";
import React from "react";
import { Controller } from "react-hook-form";

const FormTextField = ({ type, label, control }) => {
  return (
    <>
      <Controller
        name={type}
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            type={type}
            label={label}
            required
            fullWidth
            margin="normal"
          />
        )}
      />
    </>
  );
};

export default FormTextField;
