import { TextField } from "@mui/material";
import React from "react";
import { Controller, Control, FieldValues } from "react-hook-form";

type FormTextFieldProps = {
  type: string;
  label: string;
  control: Control<FieldValues>;
};

const FormTextField = ({ type, label, control }: FormTextFieldProps) => {
  return (
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
  );
};

export default FormTextField;
