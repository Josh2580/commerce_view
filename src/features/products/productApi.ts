import { baseApi } from "../base/baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "api/products/",
    }),
    getProductById: builder.query({
      query: (id) => `products/${id}/`,
    }),
  }),
  overrideExisting: false,
});

export const { useGetProductsQuery } = productApi;
