import React from "react";
import { Typography, Box } from "@mui/material";
import { useNavigationContext } from "../../../../context";
import { PAGES, PagesEnum } from "../../../../constants";
import { Link } from "react-router";

const ModalContent = ({ data }) => {
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

export default ModalContent;
