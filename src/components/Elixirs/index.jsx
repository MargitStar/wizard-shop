import React from "react";
import DataDisplayer from "../DataDisplayer";
import { Typography } from "@mui/material";
import { useGetElixirsQuery } from "../../utils/api";

const ElixirsContent = ({ data }) => {
  return (
    <>
      <Typography variant="h5" component="div">
        {data.name}
      </Typography>
      <Typography gutterBottom sx={{ color: "text.secondary", fontSize: 14 }}>
        Effect: {data.effect ? data.effect : "DEATHLY"}
      </Typography>
      <Typography gutterBottom sx={{ color: "text.secondary", fontSize: 14 }}>
        Difficulty: {data.difficulty}
      </Typography>
    </>
  );
};

export default function Elixirs() {
  const response = useGetElixirsQuery();
  return (
    <DataDisplayer
      name="Elixirs"
      Content={ElixirsContent}
      response={response}
    />
  );
}
