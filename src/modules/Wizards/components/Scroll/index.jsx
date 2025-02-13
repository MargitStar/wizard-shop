import React from "react";

import HomeScroll from "../../../../components/HomeScroll";
import { PagesEnum } from "../../../../constants";
import Content from "../Content";
import { useGetWizards } from "../../utils/hooks";

const Scroll = () => {
  const response = useGetWizards();
  return (
    <HomeScroll
      name={PagesEnum.WIZARDS}
      Content={Content}
      response={response}
    />
  );
};

export default Scroll;
