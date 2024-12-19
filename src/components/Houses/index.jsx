import React from "react";
import DataDisplayer from "../DataDisplayer";
import { WIZARD_WORLD_BASE_URL } from "../../constants";
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
  return (
    <DataDisplayer
      url={`${WIZARD_WORLD_BASE_URL}/Houses`}
      name="Houses"
      Content={HousesContent}
      fetcher={useGetHousesQuery}
    />
  );
}
