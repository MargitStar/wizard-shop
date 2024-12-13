import React from "react";
import { WIZARD_WORLD_BASE_URL } from "../../constants";
import DataFetcherWithPagination from "../DataFetcher";
import { Typography } from "@mui/material";

const WizardsContent = ({ data }) => {
  return (
    <>
      <Typography variant="h5" component="div">
        {data.firstName} {data.lastName}
      </Typography>
    </>
  );
};

export default function Wizards() {
  return (
    <DataFetcherWithPagination
      url={`${WIZARD_WORLD_BASE_URL}/Wizards`}
      name="Wizards"
      Content={WizardsContent}
    />
  );
}
