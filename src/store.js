import { configureStore } from "@reduxjs/toolkit";
import fetchReducer from "../src/utils/fetcher";

export const store = configureStore({
  reducer: {
    fetch: fetchReducer,
  },
});
