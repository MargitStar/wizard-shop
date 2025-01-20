import { configureStore } from "@reduxjs/toolkit";
import { api } from "./utils/api";
import spellWizardReducer from "./utils/slice";

export const store = configureStore({
  reducer: {
    spellWizards: spellWizardReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
