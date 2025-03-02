import React from "react";
import { ButtonProps, MenuItemProps, Typography } from "@mui/material";
import { PagesEnum } from "../../constants";

type PagesEnumValues = (typeof PagesEnum)[keyof typeof PagesEnum];

type HeaderItemProps = {
  route: string;
  page: PagesEnumValues;
  selectedButton: PagesEnumValues | undefined;
  handleCloseNavigation: () => void;
  handleItemClick: (route: string, page: PagesEnumValues) => void;
  ButtonComponent: React.ComponentType<ButtonProps | MenuItemProps>;
};

const HeaderItem = ({
  ButtonComponent,
  handleItemClick,
  handleCloseNavigation,
  selectedButton,
  route,
  page,
}: HeaderItemProps) => {
  return (
    <ButtonComponent
      onClick={() => {
        handleItemClick(route, page);
        if (handleCloseNavigation) {
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
};

export default HeaderItem;
