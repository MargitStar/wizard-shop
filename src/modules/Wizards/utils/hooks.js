import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEndpointData } from "../../../utils/fetcher";
import { WIZARD_WORLD_BASE_URL } from "../../../constants";

export const useGetWizards = () => {
  const dispatch = useDispatch();
  const response = useSelector((state) => state.spellWizards?.wizards);
  useEffect(() => {
    dispatch(fetchEndpointData("wizards", `${WIZARD_WORLD_BASE_URL}/Wizards`));
  }, [dispatch]);

  return response;
};
