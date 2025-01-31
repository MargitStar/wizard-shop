import React from "react";
import DataDisplayer from "../DataDisplayer";
import { Typography, Box } from "@mui/material";
import { useGetIngredientsQuery, useGetIngredientQuery } from "../../utils/api";
import HomeScroll from "../HomeScroll";

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

export function IngredientsHomeScroll({ handleItemClick }) {
  const response = useGetIngredientsQuery();
  return (
    <HomeScroll
      name="Ingredients"
      Content={IngredientsContent}
      response={response}
      handleItemClick={handleItemClick}
    />
  );
}

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
