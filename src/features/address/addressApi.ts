import { baseApi } from "../base/baseApi";
// import { AdressType } from "../../types/AddressType";

const addressApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Login for Users
    // getAddress: builder.query<AdressType, void>({
    getAddress: builder.query({ query: () => "api/address/" }),
    createAddress: builder.mutation({
      query: (addressForm) => ({
        url: "api/address/",
        method: "POST",
        body: addressForm,
      }),
    }),
  }),
});

export const { useGetAddressQuery, useCreateAddressMutation } = addressApi;
