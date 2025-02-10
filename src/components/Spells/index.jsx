import React, { useEffect } from "react";
import { PagesEnum, WIZARD_WORLD_BASE_URL } from "../../constants";
import { useDispatch, useSelector } from "react-redux";
import DataDisplayer from "../DataDisplayer";
import { fetchEndpointData } from "../../utils/fetcher";
import { Typography, Box } from "@mui/material";
import { useGetSpellQuery } from "../../utils/api";
import HomeScroll from "../HomeScroll";
import { useFetcher } from "react-router";

export const SpellsContent = ({ data }) => {
  return (
    <Typography variant="h5" component="div">
      {data?.name}
    </Typography>
  );
};

const ModalSpellContent = ({ data }) => {
  return (
    <Box>
      <Typography variant="h5" component="div">
        {data?.name}
      </Typography>
      <Typography gutterBottom sx={{ color: "text.secondary", fontSize: 14 }}>
        Incantation: {data?.incantation ? data.incantation : "Unknown"}
      </Typography>
      <Typography gutterBottom sx={{ color: "text.secondary", fontSize: 14 }}>
        Effect: {data?.effect ? data.effect : "Unknown"}
      </Typography>
      <Typography gutterBottom sx={{ color: "text.secondary", fontSize: 14 }}>
        Type: {data?.type}
      </Typography>
      <Typography gutterBottom sx={{ color: "text.secondary", fontSize: 14 }}>
        Light: {data?.light}
      </Typography>
      <Typography gutterBottom sx={{ color: "text.secondary", fontSize: 14 }}>
        Creator: {data?.creator || "Unknown"}
      </Typography>
      <Typography gutterBottom sx={{ color: "text.secondary", fontSize: 14 }}>
        {data?.canBeVerbal ? "Verbal" : "Non-Verbal"}
      </Typography>
    </Box>
  );
};

const useGetSpells = () => {
  const dispatch = useDispatch();
  const response = useSelector((state) => state.spellWizards?.spells);
  useEffect(() => {
    dispatch(fetchEndpointData("spells", `${WIZARD_WORLD_BASE_URL}/Spells`));
  }, [dispatch]);

  return response;
};

export function SpellsHomeScroll() {
  const response = useGetSpells();
  return (
    <HomeScroll
      name={PagesEnum.SPELLS}
      Content={SpellsContent}
      response={response}
    />
  );
}

export default function Spells() {
  const response = useGetSpells();
  return (
    <DataDisplayer
      name={PagesEnum.SPELLS}
      Content={SpellsContent}
      response={response}
      useModalDataQuery={useGetSpellQuery}
      ModalContent={ModalSpellContent}
    />
  );
}
