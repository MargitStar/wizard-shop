import React from "react";
import DataDisplayer from "../DataDisplayer";
import { Typography, Box } from "@mui/material";
import { useGetElixirsQuery, useGetElixirQuery } from "../../utils/api";
import HomeScroll from "../HomeScroll";
import { PagesEnum } from "../../constants";

const ElixirsContent = ({ data }) => {
  return (
    <Typography variant="h5" component="div">
      {data?.name}
    </Typography>
  );
};

const ElixirModalContent = ({ data }) => {
  return (
    <Box>
      <Typography variant="h5" component="div">
        {data?.name}
      </Typography>
      <Typography gutterBottom sx={{ color: "text.secondary", fontSize: 14 }}>
        Effect: {data?.effect ? data.effect : "DEATHLY"}
      </Typography>
      <Typography gutterBottom sx={{ color: "text.secondary", fontSize: 14 }}>
        Side Effects: {data?.sideEffects}
      </Typography>
      <Typography gutterBottom sx={{ color: "text.secondary", fontSize: 14 }}>
        Characteristics: {data?.characteristics}
      </Typography>
      <Typography gutterBottom sx={{ color: "text.secondary", fontSize: 14 }}>
        Difficulty: {data?.difficulty}
      </Typography>
    </Box>
  );
};

export function ElixirsHomeScroll() {
  const response = useGetElixirsQuery();
  return (
    <HomeScroll
      name={PagesEnum.ELIXIRS}
      Content={ElixirsContent}
      response={response}
    />
  );
}

export default function Elixirs() {
  const response = useGetElixirsQuery();
  return (
    <DataDisplayer
      name={PagesEnum.ELIXIRS}
      Content={ElixirsContent}
      response={response}
      useModalDataQuery={useGetElixirQuery}
      ModalContent={ElixirModalContent}
    />
  );
}
