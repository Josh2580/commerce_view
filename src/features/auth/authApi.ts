import { baseApi } from "../base/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Login for Users
    login: builder.mutation({
      query: (loginFormData) => ({
        url: "api/users/login/",
        method: "POST",
        body: loginFormData,
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
