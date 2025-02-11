import React from "react";
import { Typography, Box } from "@mui/material";

const ModalContent = ({ data }) => {
  return (
    <Box>
      <Typography variant="h5" component="div">
        {data?.name}
      </Typography>
      <Typography gutterBottom sx={{ color: "text.secondary", fontSize: 14 }}>
        Incantation: {data?.incantation ? data.incantation : "Unknown"}
      </Typography>
      <Typography gutterBottom sx={{ color: "text.secondary", fontSize: 14 }}>
        Effect: {data?.effect ? data.effect : "Unknown"}
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
