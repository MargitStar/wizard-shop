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
    getIngredients: builder.query({
      query: () => "Ingredients",
    }),
    getHouses: builder.query({
      query: () => "Houses",
    }),
  }),
});

export const { useGetElixirsQuery, useGetHousesQuery, useGetIngredientsQuery } =
  api;
