import React from "react";
import { Typography, Box } from "@mui/material";

type SpellData = {
  name?: string;
  incantation?: string;
  effect?: string;
  type?: string;
  light?: string;
  creator?: string;
  canBeVerbal?: boolean;
};

type ModalContentProps = {
  data: SpellData;
};

const ModalContent = ({ data }: ModalContentProps) => {
  return (
    <Box>
      <Typography variant="h5" component="div">
        {data?.name}
      </Typography>
      <Typography gutterBottom sx={{ color: "text.secondary", fontSize: 14 }}>
        Incantation: {data?.incantation || "Unknown"}
      </Typography>
      <Typography gutterBottom sx={{ color: "text.secondary", fontSize: 14 }}>
        Effect: {data?.effect || "Unknown"}
      </Typography>
      <Typography gutterBottom sx={{ color: "text.secondary", fontSize: 14 }}>
        Type: {data?.type}
      </Typography>
      <Typography gutterBottom sx={{ color: "text.secondary", fontSize: 14 }}>
        Light: {data?.light}
      </Typography>
      <Typography gutterBottom sx={{ color: "text.secondary", fontSize: 14 }}>
        Creator: {data?.creator || "Unknown"}
      </Typography>
      <Typography gutterBottom sx={{ color: "text.secondary", fontSize: 14 }}>
        {data?.canBeVerbal ? "Verbal" : "Non-Verbal"}
      </Typography>
    </Box>
  );
};

export default ModalContent;
