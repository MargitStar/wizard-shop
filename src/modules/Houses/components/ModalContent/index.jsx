import React from "react";
import { Typography, Box } from "@mui/material";

const ModalContent = ({ data }) => {
  return (
    <Box>
      <Typography variant="h5" component="div">
        {data?.name}
      </Typography>
      <Typography gutterBottom sx={{ color: "text.secondary", fontSize: 14 }}>
        Colors: {data?.houseColours}
      </Typography>
      <Typography gutterBottom sx={{ color: "text.secondary", fontSize: 14 }}>
        Founder: {data?.founder}
      </Typography>
      <Typography gutterBottom sx={{ color: "text.secondary", fontSize: 14 }}>
        Animal: {data?.animal}
      </Typography>
      <Typography gutterBottom sx={{ color: "text.secondary", fontSize: 14 }}>
        Heads:{" "}
        {data?.heads
          .map((head) => `${head.firstName} ${head.lastName}`)
          .join(", ")}
      </Typography>
    </Box>
  );
};

export default ModalContent;
