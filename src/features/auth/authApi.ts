import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "auth/login/",
        method: "POST",
        body: credentials,
      }),
    }),
    register: builder.mutation({
      query: (newUser) => ({
        url: "auth/register/",
        method: "POST",
        body: newUser,
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;
