import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { WIZARD_WORLD_BASE_URL } from "../constants";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: `${WIZARD_WORLD_BASE_URL}/`,
  }),
  endpoints: (builder) => ({
    getElixirs: builder.query({
      query: () => "Elixirs",
      providesTags: (result) =>
        result ? [{ type: "Elixirs", id: "LIST" }] : [],
    }),
    getIngredients: builder.query({
      query: () => "Ingredients",
      providesTags: (result) =>
        result ? [{ type: "Ingredients", id: "LIST" }] : [],
    }),
    getWizards: builder.query({
      query: () => "Wizards",
      providesTags: (result) =>
        result ? [{ type: "Wizards", id: "LIST" }] : [],
    }),
    getSpells: builder.query({
      query: () => "Spells",
      providesTags: (result) =>
        result ? [{ type: "Spells", id: "LIST" }] : [],
    }),
    getHouses: builder.query({
      query: () => "Houses",
      providesTags: (result) =>
        result ? [{ type: "Houses", id: "LIST" }] : [],
    }),
  }),
});

export const {
  useGetElixirsQuery,
  useGetHousesQuery,
  useGetIngredientsQuery,
  useGetSpellsQuery,
  useGetWizardsQuery,
} = api;
