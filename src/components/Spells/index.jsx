import React from "react";
import { WIZARD_WORLD_BASE_URL } from "../../constants";
import DataDisplayer from "../DataDisplayer";
import { Typography } from "@mui/material";
import { useGetSpellsQuery } from "../../utils/api";

const SpellsContent = ({ data }) => {
  return (
    <>
      <Typography variant="h5" component="div">
        {data.name}
      </Typography>
      <Typography gutterBottom sx={{ color: "text.secondary", fontSize: 14 }}>
        Incantation: {data.incantation ? data.incantation : "DEATHLY"}
      </Typography>
      <Typography gutterBottom sx={{ color: "text.secondary", fontSize: 14 }}>
        Effect: {data.effect ? data.effect : "DEATHLY"}
      </Typography>
      <Typography gutterBottom sx={{ color: "text.secondary", fontSize: 14 }}>
        {data.canBeVerbal ? "Verbal" : "Non-Verbal"}
      </Typography>
    </>
  );
};

export default function Spells() {
  return (
    <DataDisplayer
      url={`${WIZARD_WORLD_BASE_URL}/Spells`}
      name="Spells"
      Content={SpellsContent}
      fetcher={useGetSpellsQuery}
    />
  );
}
