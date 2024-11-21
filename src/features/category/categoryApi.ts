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
        sort_string,
      }: {
        parent_category_id: any;
        category_id: any;
        sort_string: any;
      }) =>
        `api/categories/${parent_category_id}/subcategories/${category_id}/products/?${sort_string}`,
    }),
    getSubCategoryProductFilter: builder.query({
      query: ({
        parent_category_id,
        category_id,
        sort_string,
        filter_string,
      }: {
        parent_category_id: any;
        category_id: any;
        sort_string: any;
        filter_string: any;
      }) =>
        `api/categories/${parent_category_id}/subcategories/${category_id}/products/?${sort_string}&${filter_string}`,
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
  useGetSubCategoryProductFilterQuery,
} = categoryApi;
