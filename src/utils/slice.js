import { createSlice } from "@reduxjs/toolkit";

const fetchSlice = createSlice({
  name: "spellWizards",
  initialState: {
    wizards: {
      isLoading: false,
      data: null,
      error: null,
      lastlyCached: null,
    },
    spells: {
      isLoading: false,
      data: null,
      error: null,
      lastlyCached: null,
    },
  },
  reducers: {
    setLoading: (state, action) => {
      const { endpoint_name } = action.payload;
      state[endpoint_name].isLoading = true;
    },
    setData: (state, action) => {
      const { endpoint_name, data } = action.payload;
      state[endpoint_name].data = data;
      state[endpoint_name].isLoading = false;
      state[endpoint_name].lastlyCached = Date.now();
    },
    setError: (state, action) => {
      const { error, endpoint_name } = action.payload;
      state[endpoint_name].error = error;
      state[endpoint_name].isLoading = false;
    },
  },
});

export const { setLoading, setData, setError } = fetchSlice.actions;

export default fetchSlice.reducer;
