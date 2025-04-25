import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import store from "../store";

type RootState = ReturnType<typeof store.getState>;

const baseUrlEnv =
  // process.env.NEXT_PUBLIC_BASE_URL || process.env.NEXT_PUBLIC_BASE_URL_RE;
  process.env.NEXT_PUBLIC_BASE_URL_RE || process.env.NEXT_PUBLIC_BASE_URL;

const baseUrl = `${baseUrlEnv}/monuments`;

export const adminMonumentsApi = createApi({
  reducerPath: "adminMonumentsApi",
  baseQuery: fetchBaseQuery({
    // baseUrl: "http://localhost:3001/api/monuments",
    baseUrl,
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

    addMonument: builder.mutation({
      query: (formData) => ({
        url: `/`,
        method: "POST",
        body: formData,
      }),

      invalidatesTags: ["adminMonuments"],
    }),
    updateMonument: builder.mutation({
      query: ({ formData, _id }) => ({
        url: `/${_id}`,
        method: "PATCH",
        body: formData,
      }),
      invalidatesTags: ["adminMonuments"],
    }),
    updateMonumentFavorite: builder.mutation({
      query: ({ id, newFavorite }) => ({
        url: `/${id}/favorite`,
        method: "PATCH",
        body: newFavorite,
      }),
      invalidatesTags: ["adminMonuments"],
    }),
  }),
});

export const {
  useGetAllMonumentsProductQuery,
  useDeleteMonumentMutation,
  useAddMonumentMutation,
  useUpdateMonumentMutation,
  useUpdateMonumentFavoriteMutation,
} = adminMonumentsApi;
