import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { PAGES, PagesEnum } from "../../../../constants";

const NotFound = () => {
  const navigate = useNavigate();
  const homePage = PAGES.find((item) => item.page === PagesEnum.HOME);

  const handleHomeClick = () => {
    navigate(homePage?.route);
  };

  return (
    <Box sx={{ textAlign: "center", marginTop: 4 }}>
      <Typography variant="h3" color="error">
        404 - Not Found
      </Typography>
      <Typography variant="h6" sx={{ marginTop: 2 }}>
        The page you're looking for doesn't exist.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        sx={{ marginTop: 3 }}
        onClick={handleHomeClick}
      >
        Go to Home Page
      </Button>
    </Box>
  );
};

export default NotFound;
