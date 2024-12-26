import { baseApi } from "../base/baseApi";
import { AdressType } from "../../types/AddressType";

const paymentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Login for Users
    // getAddress: builder.query<AdressType, void>({
    getPaymentMethods: builder.query({ query: () => "api/payment/methods/" }),
    createAddress: builder.mutation({
      query: (addressData) => ({
        url: "api/address/",
        method: "POST",
        body: addressData,
      }),
    }),
  }),
});

export const { useGetPaymentMethodsQuery } = paymentApi;
