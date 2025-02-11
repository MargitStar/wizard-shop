import React from "react";
import DataDisplayer from "../../../../components/DataDisplayer";
import { PagesEnum } from "../../../../constants";
import { useGetSpellQuery } from "../../../../utils/api";
import Content from "../Content";
import ModalContent from "../ModalContent";
import { useGetSpells } from "../../utils/hooks";

const Spells = () => {
  const response = useGetSpells();
  return (
    <DataDisplayer
      name={PagesEnum.SPELLS}
      Content={Content}
      response={response}
      useModalDataQuery={useGetSpellQuery}
      ModalContent={ModalContent}
    />
  );
};

export default Spells;
