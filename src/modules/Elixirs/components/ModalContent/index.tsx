import React from "react";
import { Typography, Box } from "@mui/material";

type ElixirData = {
  name?: string;
  effect?: string;
  sideEffects?: string;
  characteristics?: string;
  difficulty?: string;
};

type ModalContentProps = {
  data: ElixirData;
};

const ModalContent = ({ data }: ModalContentProps) => {
  return (
    <Box>
      <Typography variant="h5" component="div">
        {data?.name}
      </Typography>
      <Typography gutterBottom sx={{ color: "text.secondary", fontSize: 14 }}>
        Effect: {data?.effect || "Unknown"}
      </Typography>
      <Typography gutterBottom sx={{ color: "text.secondary", fontSize: 14 }}>
        Side Effects: {data?.sideEffects || "Unknown"}
      </Typography>
      <Typography gutterBottom sx={{ color: "text.secondary", fontSize: 14 }}>
        Characteristics: {data?.characteristics || "Unknown"}
      </Typography>
      <Typography gutterBottom sx={{ color: "text.secondary", fontSize: 14 }}>
        Difficulty: {data?.difficulty || "Unknown"}
      </Typography>
    </Box>
  );
};

export default ModalContent;
