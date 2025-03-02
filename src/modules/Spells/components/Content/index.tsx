import React from "react";
import { Typography } from "@mui/material";

type ContentProps = {
  data: {
    name?: string;
  };
};

const Content = ({ data }: ContentProps) => {
  return (
    <Typography variant="h5" component="div">
      {data?.name}
    </Typography>
  );
};

export default Content;
