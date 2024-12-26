import { baseApi } from "../base/baseApi";
// import { AdressType } from "../../types/AddressType";

const orderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Login for Users
    // getAddress: builder.query<AdressType, void>({
    // getAddress: builder.query({ query: () => "api/address/" }),
    createOrder: builder.mutation({
      query: (orderForm) => ({
        url: "api/orders/create/",
        method: "POST",
        body: orderForm,
      }),
    }),
  }),
});

export const { useCreateOrderMutation } = orderApi;
