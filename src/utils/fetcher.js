import { setLoading, setData, setError } from "./slice";

export const fetchEndpointData = (endpoint_name, url) => async (dispatch) => {
  try {
    dispatch(setLoading({ endpoint_name }));
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(
        `Endpoint ${url} failed with error code ${response.code}`
      );
    }
    dispatch(setData({ endpoint_name, data: await response.json() }));
  } catch (error) {
    dispatch(setError({ endpoint_name, error: error.message }));
  }
};
