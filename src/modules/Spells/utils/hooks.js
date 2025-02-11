import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEndpointData } from "../../../utils/fetcher";
import { WIZARD_WORLD_BASE_URL } from "../../../constants";

export const useGetSpells = () => {
  const dispatch = useDispatch();
  const response = useSelector((state) => state.spellWizards?.spells);
  useEffect(() => {
    dispatch(fetchEndpointData("spells", `${WIZARD_WORLD_BASE_URL}/Spells`));
  }, [dispatch]);

  return response;
};
