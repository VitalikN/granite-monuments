import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import store from "../store";
import { clearToken } from "./authSlice";

type RootState = ReturnType<typeof store.getState>;
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL_NAME;
// process.env.NEXT_PUBLIC_BASE_URL_NAME ||
// process.env.NEXT_PUBLIC_BASE_URL_NAME_RE;

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl,

    // baseUrl: "http://localhost:3001/api/admin",
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as { auth: { token: string } }).auth.token;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["auth"],

  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "/login",
        method: "POST",
        body: credentials,
      }),
      invalidatesTags: ["auth"],
    }),
    update: builder.mutation({
      query: (updates) => ({
        url: "/update",
        method: "PUT",
        body: updates,
      }),
      invalidatesTags: ["auth"],
    }),

    logout: builder.mutation({
      query: () => ({
        url: "/logout ",
        method: "POST",
      }),
      invalidatesTags: ["auth"],
    }),

    current: builder.query({
      query: () => "/current",

      onQueryStarted: (_, { dispatch, getState }) => {
        const token = (getState() as RootState).auth.token;
        if (!token) {
          dispatch(clearToken());
        }
      },
      providesTags: ["auth"],
    }),
  }),
});

export const {
  useLoginMutation,
  useLogoutMutation,
  useCurrentQuery,
  useUpdateMutation,
} = authApi;
