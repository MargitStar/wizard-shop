import React from "react";
import DataDisplayer from "../DataDisplayer";
import { Typography } from "@mui/material";
import { useGetHousesQuery } from "../../utils/api";

const HousesContent = ({ data }) => {
  return (
    <>
      <Typography variant="h5" component="div">
        {data.name}
      </Typography>
      <Typography gutterBottom sx={{ color: "text.secondary", fontSize: 14 }}>
        Colors: {data.houseColours}
      </Typography>
      <Typography gutterBottom sx={{ color: "text.secondary", fontSize: 14 }}>
        Founder: {data.founder}
      </Typography>
      <Typography gutterBottom sx={{ color: "text.secondary", fontSize: 14 }}>
        Animal: {data.animal}
      </Typography>
    </>
  );
};

export default function Houses() {
  const response = useGetHousesQuery();
  return (
    <DataDisplayer name="Houses" Content={HousesContent} response={response} />
  );
}
