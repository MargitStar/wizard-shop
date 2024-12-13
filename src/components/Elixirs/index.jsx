import React from "react";
import { WIZARD_WORLD_BASE_URL } from "../../constants";
import DataFetcherWithPagination from "../DataFetcher";
import { Typography } from "@mui/material";

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
  return (
    <DataFetcherWithPagination
      url={`${WIZARD_WORLD_BASE_URL}/Elixirs`}
      name="Elixirs"
      Content={ElixirsContent}
    />
  );
}
