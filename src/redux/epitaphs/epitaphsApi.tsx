import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrlEnv =
  process.env.NEXT_PUBLIC_BASE_URL || process.env.NEXT_PUBLIC_BASE_URL_RE;

const baseUrl = `${baseUrlEnv}/epitaphs`;
export const epitaphsApi = createApi({
  reducerPath: "epitaphsApi",

  baseQuery: fetchBaseQuery({
    // baseUrl: "http://localhost:3001/api/epitaphs",
    baseUrl,
  }),
  tagTypes: ["epitaphs"],
  endpoints: (builder) => ({
    getAllEpitaphs: builder.query({
      query: ({ page, limit }) => `?page=${page}&limit=${limit}`,
    }),
  }),
});

export const { useGetAllEpitaphsQuery } = epitaphsApi;
