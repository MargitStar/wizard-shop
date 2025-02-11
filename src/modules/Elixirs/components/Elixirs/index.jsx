import React from "react";

import DataDisplayer from "../../../../components/DataDisplayer";
import { PagesEnum } from "../../../../constants";
import { useGetElixirQuery, useGetElixirsQuery } from "../../../../utils/api";
import Content from "../Content";
import ModalContent from "../ModalContent";

export default function Elixirs() {
  const response = useGetElixirsQuery();
  return (
    <DataDisplayer
      name={PagesEnum.ELIXIRS}
      Content={Content}
      response={response}
      useModalDataQuery={useGetElixirQuery}
      ModalContent={ModalContent}
    />
  );
}
