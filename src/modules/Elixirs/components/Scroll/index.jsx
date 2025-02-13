import React from "react";

import HomeScroll from "../../../../components/HomeScroll";
import { PagesEnum } from "../../../../constants";
import { useGetElixirsQuery } from "../../../../utils/api";
import Content from "../Content";

const Scroll = () => {
  const response = useGetElixirsQuery();
  return (
    <HomeScroll
      name={PagesEnum.ELIXIRS}
      Content={Content}
      response={response}
    />
  );
};

export default Scroll;
