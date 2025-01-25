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
    }),
    getElixir: builder.query({
      query: (id) => `Elixirs/${id}`,
    }),
    getIngredients: builder.query({
      query: () => "Ingredients",
    }),
    getIngredient: builder.query({
      query: (id) => `Ingredients/${id}`,
    }),
    getHouses: builder.query({
      query: () => "Houses",
    }),
    getHouse: builder.query({
      query: (id) => `Houses/${id}`,
    }),
    getWizard: builder.query({
      query: (id) => `Wizards/${id}`,
    }),
    getSpell: builder.query({
      query: (id) => `Spells/${id}`,
    }),
  }),
});

export const {
  useGetElixirsQuery,
  useGetHousesQuery,
  useGetIngredientsQuery,
  useGetElixirQuery,
  useGetHouseQuery,
  useGetIngredientQuery,
  useGetWizardQuery,
  useGetSpellQuery,
} = api;
