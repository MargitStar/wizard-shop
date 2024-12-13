import React from "react";
import { WIZARD_WORLD_BASE_URL } from "../../constants";
import DataFetcherWithPagination from "../DataFetcher";
import { Typography } from "@mui/material";

const IngredientsContent = ({ data }) => {
  return (
    <>
      <Typography variant="h5" component="div">
        {data.name}
      </Typography>
    </>
  );
};

export default function Ingredients() {
  return (
    <DataFetcherWithPagination
      url={`${WIZARD_WORLD_BASE_URL}/Ingredients`}
      name="Ingredients"
      Content={IngredientsContent}
    />
  );
}
