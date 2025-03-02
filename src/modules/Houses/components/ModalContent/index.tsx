import React from "react";
import { Typography, Box } from "@mui/material";

type HeadsData = {
  firstName?: string;
  lastName?: string;
};

type HouseData = {
  name?: string;
  houseColours?: string[];
  founder?: string;
  animal?: string;
  heads?: HeadsData[];
};

type ModalContentProps = {
  data: HouseData;
};

const ModalContent = ({ data }: ModalContentProps) => {
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
        {(data?.heads ?? [])
          .map((head) => `${head.firstName} ${head.lastName}`)
          .join(", ")}
      </Typography>
    </Box>
  );
};

export default ModalContent;
