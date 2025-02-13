import React from "react";

import HomeScroll from "../../../../components/HomeScroll";
import { PagesEnum } from "../../../../constants";
import { useGetHousesQuery } from "../../../../utils/api";
import Content from "../Content";

const Scroll = () => {
  const response = useGetHousesQuery();
  return (
    <HomeScroll name={PagesEnum.HOUSES} Content={Content} response={response} />
  );
};

export default Scroll;
