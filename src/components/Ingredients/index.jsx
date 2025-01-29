import React from "react";
import DataDisplayer from "../DataDisplayer";
import { Typography, Box } from "@mui/material";
import { useGetIngredientsQuery, useGetIngredientQuery } from "../../utils/api";

const IngredientsContent = ({ data }) => {
  return (
    <Typography variant="h5" component="div">
      {data?.name}
    </Typography>
  );
};

const IngredientModalContent = ({ data }) => {
  return (
    <Box>
      <Typography variant="h5" component="div">
        {data?.name}
      </Typography>
    </Box>
  );
};

export default function Ingredients() {
  const response = useGetIngredientsQuery();
  return (
    <DataDisplayer
      name="Ingredients"
      Content={IngredientsContent}
      response={response}
      useModalDataQuery={useGetIngredientQuery}
      ModalContent={IngredientModalContent}
    />
  );
}
