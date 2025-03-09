import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrlEnv =
  process.env.NEXT_PUBLIC_BASE_URL || process.env.NEXT_PUBLIC_BASE_URL_RE;

const baseUrl = `${baseUrlEnv}/epitaphs`;

export const adminEpitaphsApi = createApi({
  reducerPath: "adminEpitaphsApi",
  baseQuery: fetchBaseQuery({
    // baseUrl: "http://localhost:3001/api/epitaphs",
    baseUrl,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as { auth: { token: string } }).auth.token;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),

  tagTypes: ["adminEpitaphs"],
  endpoints: (builder) => ({
    deleteEpitaph: builder.mutation({
      query: (_id) => ({
        url: `/${_id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["adminEpitaphs"],
    }),

    addEpitaph: builder.mutation({
      query: (formData) => ({
        url: `/`,
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["adminEpitaphs"],
    }),
    updateEpitaph: builder.mutation({
      query: ({ _id, formData }) => ({
        url: `/${_id}`,
        method: "PATCH",
        body: formData,
      }),
      invalidatesTags: ["adminEpitaphs"],
    }),
  }),
});

export const {
  useDeleteEpitaphMutation,
  useAddEpitaphMutation,
  useUpdateEpitaphMutation,
} = adminEpitaphsApi;
