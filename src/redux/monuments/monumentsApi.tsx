import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const baseUrlEnv =
  // process.env.NEXT_PUBLIC_BASE_URL_RE || process.env.NEXT_PUBLIC_BASE_URL;
  process.env.NEXT_PUBLIC_BASE_URL || process.env.NEXT_PUBLIC_BASE_URL_RE;

const baseUrl = `${baseUrlEnv}/monuments`;
export const monumentsApi = createApi({
  reducerPath: "monumentsApi",
  baseQuery: fetchBaseQuery({
    // baseUrl: "http://localhost:3001/api/monuments",
    baseUrl,
  }),
  tagTypes: ["monuments"],
  endpoints: (builder) => ({
    getAllMonuments: builder.query({
      query: ({ page, limit, category, subtitle }) => {
        let queryString = `?page=${page}&limit=${limit}&category=${category}`;
        if (subtitle) {
          queryString += `&subtitle=${subtitle}`;
        }
        return queryString;
      },
    }),
  }),
});

export const { useGetAllMonumentsQuery } = monumentsApi;
