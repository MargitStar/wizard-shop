import React from "react";
import DataDisplayer from "../../../../components/DataDisplayer";
import { PagesEnum } from "../../../../constants";
import { useGetWizardQuery } from "../../../../utils/api";
import Content from "../Content";
import ModalContent from "../ModalContent";
import { useGetWizards } from "../../utils/hooks";

const WizardsList = () => {
  const response = useGetWizards();
  return (
    <DataDisplayer
      name={PagesEnum.WIZARDS}
      Content={Content}
      response={response}
      useModalDataQuery={useGetWizardQuery}
      ModalContent={ModalContent}
    />
  );
};

export default WizardsList;
