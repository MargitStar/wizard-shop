import React from "react";
import DataFetcherWithPagination from "../DataFetcher";
import { WIZARD_WORLD_BASE_URL } from "../../constants";
import { Typography } from "@mui/material";

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
    <DataFetcherWithPagination
      url={`${WIZARD_WORLD_BASE_URL}/Houses`}
      name="Houses"
      Content={HousesContent}
    />
  );
}
