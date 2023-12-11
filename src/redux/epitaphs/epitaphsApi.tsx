import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const epitaphsApi = createApi({
  reducerPath: "epitaphsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://monuments-backend.onrender.com/api/epitaphs",
    // baseUrl: "http://localhost:3001/api/epitaphs",
  }),
  tagTypes: ["epitaphs"],
  endpoints: (builder) => ({
    getAllEpitaphs: builder.query({
      query: ({ page, limit }) => `?page=${page}&limit=${limit}`,
    }),
  }),
});

export const { useGetAllEpitaphsQuery } = epitaphsApi;
