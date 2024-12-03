import { baseApi } from "../base/baseApi";
import { CategoryDataType } from "../../types/CategoryType";

const categoryApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Fetch all categories
    getCategory: builder.query<CategoryDataType, void>({
      query: () => "api/categories/",
      providesTags: ["Category"], // Tags all categories for cache invalidation
    }),

    // Fetch a category by ID
    getCategoryById: builder.query({
      query: (category_id) => `api/categories/${category_id}/`,
      providesTags: (result, error, category_id) => [
        { type: "Category", id: category_id },
      ], // Tags the specific category by ID
    }),

    // Fetch subcategories of a parent category
    getSubCategory: builder.query({
      query: (parent_category_id) =>
        `api/categories/${parent_category_id}/subcategories/`,
      providesTags: (result, error, parent_category_id) => [
        { type: "SubCategory", parentId: parent_category_id },
      ], // Tags subcategories based on the parent category ID
    }),

    // Fetch products within a subcategory
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
      providesTags: (result, error, { category_id }) => [
        { type: "SubCategoryProducts", id: category_id },
      ], // Tags subcategory products by subcategory ID
    }),

    // Fetch filtered products within a subcategory
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
      providesTags: (result, error, { category_id }) => [
        { type: "FilteredProducts", id: category_id },
      ], // Tags filtered products by subcategory ID
    }),
    // addCategory: builder.mutation({
    //   query: (newCategory) => ({
    //     url: "api/categories/",
    //     method: "POST",
    //     body: newCategory,
    //   }),
    //   invalidatesTags: ["Category"], // Refresh all categories after adding a new one
    // });
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
