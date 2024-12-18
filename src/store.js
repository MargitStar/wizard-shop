import { configureStore } from "@reduxjs/toolkit";
import fetchReducer from "../src/utils/slice";

export const store = configureStore({
  reducer: {
    fetch: fetchReducer,
  },
});
