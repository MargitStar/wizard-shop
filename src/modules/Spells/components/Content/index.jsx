import React from "react";
import { Typography } from "@mui/material";

const Content = ({ data }) => {
  return (
    <Typography variant="h5" component="div">
      {data?.name}
    </Typography>
  );
};

export default Content;
