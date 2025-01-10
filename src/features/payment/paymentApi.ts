import { baseApi } from "../base/baseApi";

export const paymentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Login for Users
    // getAddress: builder.query<AdressType, void>({
    getPaymentMethods: builder.query({ query: () => "api/payments/methods/" }),
    createPaymentInitializer: builder.mutation({
      query: (initPayData) => ({
        url: "api/payments/initialize/",
        method: "POST",
        body: initPayData,
      }),
    }),
    verifyPayment: builder.query({
      query: ({ status, tx_ref, transaction_id }) =>
        `api/payments/verify/?status=${status}&tx_ref=${tx_ref}&transaction_id=${transaction_id}`,
    }),
    paymentTransactions: builder.query({
      query: () => "api/payments/transactions",
    }),
  }),
});

export const {
  useGetPaymentMethodsQuery,
  useCreatePaymentInitializerMutation,
  useVerifyPaymentQuery,
  usePaymentTransactionsQuery,
} = paymentApi;
