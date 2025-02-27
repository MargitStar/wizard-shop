import React from "react";
import { Button, Typography } from "@mui/material";
import FormTextField from "../../../../components/FormTextField";
import { LoginModalBox } from "./style";

const LoginModal = ({ error, control, handleSubmit, onSubmit }) => {
  return (
    <LoginModalBox>
      <Typography variant="h5" mb={2} align="center">
        Sign In
      </Typography>
      {error && (
        <Typography color="error" align="center" sx={{ mb: 2 }}>
          {error}
        </Typography>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormTextField type="email" label="Email" control={control} />
        <FormTextField type="password" label="Password" control={control} />
        <Button type="submit" variant="contained" sx={{ mt: 2 }}>
          Sign In
        </Button>
      </form>
    </LoginModalBox>
  );
};

export default LoginModal;
