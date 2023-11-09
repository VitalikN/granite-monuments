import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import store from "../store";

// type RootState = ReturnType<typeof store.getState>;

export const adminMonumentsApi = createApi({
  reducerPath: "adminMonumentsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://monuments-backend.onrender.com/api/monuments",
    // baseUrl: "http://localhost:3001/api/monuments",

    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as { auth: { token: string } }).auth.token;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["adminMonuments"],
  endpoints: (builder) => ({
    getAllMonumentsProduct: builder.query({
      query: ({ page, limit, category, subtitle }) => {
        let queryString = `?page=${page}&limit=${limit}&category=${category}`;
        if (subtitle) {
          queryString += `&subtitle=${subtitle}`;
        }
        return queryString;
      },
      providesTags: ["adminMonuments"],
    }),
    deleteMonument: builder.mutation({
      query: (_id) => ({
        url: `/${_id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["adminMonuments"],
    }),
  }),
});
export const { useGetAllMonumentsProductQuery, useDeleteMonumentMutation } =
  adminMonumentsApi;
