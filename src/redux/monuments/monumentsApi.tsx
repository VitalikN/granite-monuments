import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const monumentsApi = createApi({
  reducerPath: "monumentsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://monuments-backend.onrender.com/api",
    // baseUrl: "http://localhost:3001/api",
  }),
  tagTypes: ["monuments"],
  endpoints: (builder) => ({
    getAllMonuments: builder.query({
      query: ({ page, limit, category, subtitle }) => {
        let queryString = `/monuments?page=${page}&limit=${limit}&category=${category}`;
        if (subtitle) {
          queryString += `&subtitle=${subtitle}`;
        }
        return queryString;
      },
    }),
  }),
});

export const { useGetAllMonumentsQuery } = monumentsApi;
