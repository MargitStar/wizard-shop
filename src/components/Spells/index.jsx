import React, { useEffect } from "react";
import { WIZARD_WORLD_BASE_URL } from "../../constants";
import { useDispatch, useSelector } from "react-redux";
import DataDisplayer from "../DataDisplayer";
import { fetchEndpointData } from "../../utils/fetcher";
import { Typography } from "@mui/material";

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
  const dispatch = useDispatch();
  const response = useSelector((state) => state.spellWizards?.spells);
  useEffect(() => {
    dispatch(fetchEndpointData("spells", `${WIZARD_WORLD_BASE_URL}/Spells`));
  }, [dispatch]);
  return (
    <DataDisplayer name="Spells" Content={SpellsContent} response={response} />
  );
}
