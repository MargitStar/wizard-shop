import React from "react";
import { Typography } from "@mui/material";

export default function HeaderItem({
  ButtonComponent,
  handleItemClick,
  handleCloseNavigation,
  selectedButton,
  route,
  page,
}) {
  return (
    <ButtonComponent
      onClick={() => {
        handleItemClick(route, page);
        if (handleCloseNavigation !== undefined) {
          handleCloseNavigation();
        }
      }}
      sx={{
        ":hover": {
          backgroundColor: "#fcebf2",
        },
        backgroundColor: selectedButton === page ? "#fff5d7" : undefined,
      }}
    >
      <Typography sx={{ textAlign: "center", color: "#4b5945" }}>
        {page}
      </Typography>
    </ButtonComponent>
  );
}
