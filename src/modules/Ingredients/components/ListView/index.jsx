import React from "react";

import DataDisplayer from "../../../../components/DataDisplayer";
import { PagesEnum } from "../../../../constants";
import { useGetIngredientsQuery } from "../../../../utils/api";
import Content from "../Content";

const IngredientsList = () => {
  const response = useGetIngredientsQuery();
  return (
    <DataDisplayer
      name={PagesEnum.INGREDIENTS}
      Content={Content}
      response={response}
      showModal={false}
    />
  );
};

export default IngredientsList;
