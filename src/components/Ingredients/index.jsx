import React from "react";
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
  const response = useGetIngredientsQuery();
  return (
    <DataDisplayer
      name="Ingredients"
      Content={IngredientsContent}
      response={response}
    />
  );
}
