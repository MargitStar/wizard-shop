import React from "react";

import HomeScroll from "../../../../components/HomeScroll";
import { PagesEnum } from "../../../../constants";
import { useGetIngredientsQuery } from "../../../../utils/api";
import Content from "../Content";

const Scroll = () => {
  const response = useGetIngredientsQuery();
  return (
    <HomeScroll
      name={PagesEnum.INGREDIENTS}
      Content={Content}
      response={response}
    />
  );
};

export default Scroll;
