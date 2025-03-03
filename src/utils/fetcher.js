import { setLoading, setData, setError } from "./slice";

const CACHE_DURATION = 60000;

export const fetchEndpointData =
  (endpoint_name, url) => async (dispatch, getState) => {
    const state = getState();
    const lastlyCached = state.spellWizards[endpoint_name]?.lastlyCached;
    if (lastlyCached && Date.now() - lastlyCached < CACHE_DURATION) {
      console.log(`Using cached values for the endpoint ${endpoint_name}`);
      return;
    }
    try {
      dispatch(setLoading({ endpoint_name }));
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(
          `Endpoint ${url} failed with error code ${response.code}`,
        );
      }
      dispatch(setData({ endpoint_name, data: await response.json() }));
    } catch (error) {
      dispatch(setError({ endpoint_name, error: error.message }));
    }
  };
