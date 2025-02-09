import React from "react";
import DataDisplayer from "../DataDisplayer";
import { Typography, Box } from "@mui/material";
import { useGetHousesQuery, useGetHouseQuery } from "../../utils/api";
import HomeScroll from "../HomeScroll";
import { PagesEnum } from "../../constants";

export const HousesContent = ({ data }) => {
  return (
    <Typography variant="h5" component="div">
      {data?.name}
    </Typography>
  );
};

const HouseModalContent = ({ data }) => {
  return (
    <Box>
      <Typography variant="h5" component="div">
        {data?.name}
      </Typography>
      <Typography gutterBottom sx={{ color: "text.secondary", fontSize: 14 }}>
        Colors: {data?.houseColours}
      </Typography>
      <Typography gutterBottom sx={{ color: "text.secondary", fontSize: 14 }}>
        Founder: {data?.founder}
      </Typography>
      <Typography gutterBottom sx={{ color: "text.secondary", fontSize: 14 }}>
        Animal: {data?.animal}
      </Typography>
      <Typography gutterBottom sx={{ color: "text.secondary", fontSize: 14 }}>
        Heads:{" "}
        {data?.heads
          .map((head) => `${head.firstName} ${head.lastName}`)
          .join(", ")}
      </Typography>
    </Box>
  );
};

export function HousesHomeScroll() {
  const response = useGetHousesQuery();
  return (
    <HomeScroll
      name={PagesEnum.HOUSES}
      Content={HousesContent}
      response={response}
    />
  );
}

export default function Houses() {
  const response = useGetHousesQuery();
  return (
    <DataDisplayer
      name={PagesEnum.HOUSES}
      Content={HousesContent}
      response={response}
      useModalDataQuery={useGetHouseQuery}
      ModalContent={HouseModalContent}
    />
  );
}
