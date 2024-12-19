import React from "react";
import { WIZARD_WORLD_BASE_URL } from "../../constants";
import DataDisplayer from "../DataDisplayer";
import { Typography } from "@mui/material";
import { useGetIngredientsQuery } from "../../utils/api";

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
    <DataDisplayer
      url={`${WIZARD_WORLD_BASE_URL}/Ingredients`}
      name="Ingredients"
      Content={IngredientsContent}
      fetcher={useGetIngredientsQuery}
    />
  );
}
