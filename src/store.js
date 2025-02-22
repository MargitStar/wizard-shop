import { configureStore } from "@reduxjs/toolkit";
import { api } from "./utils/api";
import authReducer from "./utils/authSlice";
import spellWizardReducer from "./utils/slice";

export const store = configureStore({
  reducer: {
    spellWizards: spellWizardReducer,
    [api.reducerPath]: api.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
