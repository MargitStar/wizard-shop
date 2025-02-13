import React from "react";

import DataDisplayer from "../../../../components/DataDisplayer";
import { PagesEnum } from "../../../../constants";
import { useGetHousesQuery, useGetHouseQuery } from "../../../../utils/api";
import Content from "../Content";
import ModalContent from "../ModalContent";

const HousesList = () => {
  const response = useGetHousesQuery();
  return (
    <DataDisplayer
      name={PagesEnum.HOUSES}
      Content={Content}
      response={response}
      useModalDataQuery={useGetHouseQuery}
      ModalContent={ModalContent}
    />
  );
};

export default HousesList;
