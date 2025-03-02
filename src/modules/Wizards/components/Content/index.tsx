import React from "react";
import { Typography } from "@mui/material";

type ContentProps = {
  data: {
    firstName?: string;
    lastName?: string;
  };
};

const Content = ({ data }: ContentProps) => {
  return (
    <Typography variant="h5" component="div">
      {data?.firstName} {data?.lastName}
    </Typography>
  );
};

export default Content;
