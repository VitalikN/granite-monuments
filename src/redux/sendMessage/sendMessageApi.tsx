import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrlEnv =
  process.env.NEXT_PUBLIC_BASE_URL || process.env.NEXT_PUBLIC_BASE_URL_RE;

export const sendMessageApi = createApi({
  reducerPath: "sendMessageApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${baseUrlEnv}/sendMessage` }),
  tagTypes: ["sendMessage"],
  endpoints: (builder) => ({
    sendMessage: builder.mutation({
      query: (formData) => ({
        url: `/`,
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["sendMessage"],
    }),
  }),
});

export const { useSendMessageMutation } = sendMessageApi;
