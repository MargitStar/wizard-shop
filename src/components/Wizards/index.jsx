import React from "react";
import { WIZARD_WORLD_BASE_URL } from "../../constants";
import DataDisplayer from "../DataDisplayer";
import { Typography } from "@mui/material";
import { useGetWizardsQuery } from "../../utils/api";

const WizardsContent = ({ data }) => {
  return (
    <>
      <Typography variant="h5" component="div">
        {data.firstName} {data.lastName}
      </Typography>
    </>
  );
};

export default function Wizards() {
  return (
    <DataDisplayer
      url={`${WIZARD_WORLD_BASE_URL}/Wizards`}
      name="Wizards"
      Content={WizardsContent}
      fetcher={useGetWizardsQuery}
    />
  );
}
