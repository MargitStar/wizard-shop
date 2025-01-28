import React, { useEffect } from "react";
import { WIZARD_WORLD_BASE_URL } from "../../constants";
import { useDispatch, useSelector } from "react-redux";
import DataDisplayer from "../DataDisplayer";
import { Typography, Box } from "@mui/material";
import { fetchEndpointData } from "../../utils/fetcher";
import { useGetWizardQuery } from "../../utils/api";

const WizardsContent = ({ data }) => {
  return (
    <Typography variant="h5" component="div">
      {data?.firstName} {data?.lastName}
    </Typography>
  );
};

const WizardModalContent = ({ data }) => {
  return (
    <Box>
      <Typography variant="h5" component="div">
        {data?.firstName} {data?.lastName}
      </Typography>
      <Typography gutterBottom sx={{ color: "text.secondary", fontSize: 14 }}>
        Created Elixirs: {data?.elixirs.map((elixir) => elixir.name).join(", ")}
      </Typography>
      <Typography></Typography>
    </Box>
  );
};

export default function Wizards() {
  const dispatch = useDispatch();
  const response = useSelector((state) => state.spellWizards?.wizards);
  useEffect(() => {
    dispatch(fetchEndpointData("wizards", `${WIZARD_WORLD_BASE_URL}/Wizards`));
  }, [dispatch]);
  return (
    <DataDisplayer
      name="Wizards"
      Content={WizardsContent}
      response={response}
      useModalDataQuery={useGetWizardQuery}
      ModalContent={WizardModalContent}
    />
  );
}
