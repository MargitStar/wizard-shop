import React from "react";
import { Button, Typography } from "@mui/material";
import FormTextField from "../../../../components/FormTextField";
import { LoginContentBox } from "./style";
import { Control, FieldValues } from "react-hook-form";

type LoginContentProps = {
  error?: string;
  control: Control<FieldValues>;
  handleSubmit: (
    callback: (data: { email: string; password: string }) => void,
  ) => (event: React.FormEvent) => void;
  onSubmit: (data: { email: string; password: string }) => void;
};

const LoginContent = ({
  error,
  control,
  handleSubmit,
  onSubmit,
}: LoginContentProps) => {
  return (
    <LoginContentBox>
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
    </LoginContentBox>
  );
};

export default LoginContent;
