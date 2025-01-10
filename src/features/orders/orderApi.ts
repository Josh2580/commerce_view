import { baseApi } from "../base/baseApi";
// import { AdressType } from "../../types/AddressType";

const orderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Login for Users
    // getAddress: builder.query<AdressType, void>({
    getOrder: builder.query({ query: () => "api/orders/" }),
    createOrder: builder.mutation({
      query: (orderForm) => ({
        url: "api/orders/",
        method: "POST",
        body: orderForm,
      }),
    }),
    createOrderItems: builder.mutation({
      query: () => ({
        url: "api/orders/items/",
        method: "POST",
      }),
    }),
  }),
});

export const {
  useCreateOrderMutation,
  useCreateOrderItemsMutation,
  useGetOrderQuery,
} = orderApi;
