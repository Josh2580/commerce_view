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
      query: (category_id) => `api/categories/${category_id}/subcategories/`,
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
} = categoryApi;
