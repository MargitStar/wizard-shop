import React from "react";

import HomeScroll from "../../../../components/HomeScroll";
import { PagesEnum } from "../../../../constants";
import Content from "../Content";
import { useGetSpells } from "../../utils/hooks";

const Scroll = () => {
  const response = useGetSpells();
  return (
    <HomeScroll name={PagesEnum.SPELLS} Content={Content} response={response} />
  );
};

export default Scroll;
