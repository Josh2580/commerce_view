import { baseApi } from "../base/baseApi";
import { CategoryDataType } from "../../types/CategoryType";

const categoryApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCategory: builder.query<CategoryDataType, void>({
      query: () => "api/categories/",
    }),
    getCategoryById: builder.query({
      query: (category_id) => `api/categories/${category_id}/`,
    }),
    getSubCategory: builder.query({
      query: (parent_category_id) =>
        `api/categories/${parent_category_id}/subcategories/`,
    }),
    getSubCategoryProducts: builder.query({
      query: ({
        parent_category_id,
        category_id,
      }: {
        parent_category_id: any;
        category_id: any;
      }) =>
        `api/categories/${parent_category_id}/subcategories/${category_id}/products/`,
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
  useGetSubCategoryQuery,
  useGetSubCategoryProductsQuery,
} = categoryApi;
