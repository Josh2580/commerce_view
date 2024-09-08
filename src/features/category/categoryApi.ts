import { baseApi } from "../base/baseApi";

const categoryApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCategory: builder.query({
      query: () => "api/categories/",
    }),
    getCategoryById: builder.query({
      query: (id) => `api/categories/${id}/`,
    }),
    getCategoryProducts: builder.query({
      query: (id) => `api/categories/${id}/products/`,
    }),
    // createCategory: builder.query({
    //   query: () => `api/categories/create/`,
    // }),
  }),
  overrideExisting: false,
});

export const {
  useGetCategoryQuery,
  useGetCategoryByIdQuery,
  useGetCategoryProductsQuery,
} = categoryApi;
