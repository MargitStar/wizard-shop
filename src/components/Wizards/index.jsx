import React, { useEffect } from "react";
import { PAGES, WIZARD_WORLD_BASE_URL, PagesEnum } from "../../constants";
import { useDispatch, useSelector } from "react-redux";
import DataDisplayer from "../DataDisplayer";
import { Typography, Box } from "@mui/material";
import { fetchEndpointData } from "../../utils/fetcher";
import { useGetWizardQuery } from "../../utils/api";
import HomeScroll from "../HomeScroll";
import { Link } from "react-router";
import { useNavigationContext } from "../../context";

const WizardsContent = ({ data }) => {
  return (
    <Typography variant="h5" component="div">
      {data?.firstName} {data?.lastName}
    </Typography>
  );
};

const WizardModalContent = ({ data }) => {
  const { handleItemClick } = useNavigationContext();
  const elixirsPage = PAGES.find((item) => item.page === PagesEnum.ELIXIRS);
  return (
    <Box>
      <Typography variant="h5" component="div">
        {data?.firstName} {data?.lastName}
      </Typography>

      <Typography
        component="div"
        gutterBottom
        sx={{ color: "text.secondary", fontSize: 14 }}
      >
        Created Elixirs:{" "}
        {data?.elixirs.map((elixir) => (
          <Typography key={elixir?.id} component="div">
            <Link
              to={`${elixirsPage?.route}?modal=${elixir?.id}`}
              onClick={() => {
                handleItemClick(elixirsPage?.route, elixirsPage?.page, false);
                window.scrollTo(0, 0);
              }}
            >
              {elixir?.name}
            </Link>
          </Typography>
        ))}
      </Typography>
      <Typography></Typography>
    </Box>
  );
};

const useGetWizards = () => {
  const dispatch = useDispatch();
  const response = useSelector((state) => state.spellWizards?.wizards);
  useEffect(() => {
    dispatch(fetchEndpointData("wizards", `${WIZARD_WORLD_BASE_URL}/Wizards`));
  }, [dispatch]);

  return response;
};

export function WizardsHomeScroll() {
  const response = useGetWizards();
  return (
    <HomeScroll
      name={PagesEnum.WIZARDS}
      Content={WizardsContent}
      response={response}
    />
  );
}

export default function Wizards() {
  const response = useGetWizards();
  return (
    <DataDisplayer
      name={PagesEnum.WIZARDS}
      Content={WizardsContent}
      response={response}
      useModalDataQuery={useGetWizardQuery}
      ModalContent={WizardModalContent}
    />
  );
}
