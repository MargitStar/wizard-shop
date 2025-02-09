import React from "react";
import DataDisplayer from "../DataDisplayer";
import { Typography, Box } from "@mui/material";
import { useGetIngredientsQuery, useGetIngredientQuery } from "../../utils/api";
import HomeScroll from "../HomeScroll";
import { PagesEnum } from "../../constants";

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

export function IngredientsHomeScroll() {
  const response = useGetIngredientsQuery();
  return (
    <HomeScroll
      name={PagesEnum.INGREDIENTS}
      Content={IngredientsContent}
      response={response}
    />
  );
}

export default function Ingredients() {
  const response = useGetIngredientsQuery();
  return (
    <DataDisplayer
      name={PagesEnum.INGREDIENTS}
      Content={IngredientsContent}
      response={response}
      useModalDataQuery={useGetIngredientQuery}
      ModalContent={IngredientModalContent}
      showModal={false}
    />
  );
}
