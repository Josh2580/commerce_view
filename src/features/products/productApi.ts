import { baseApi } from "../base/baseApi";
import { DataType, FeaturedDataType } from "../../types/ProductTypes";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<DataType, void>({
      query: (order_string) => `api/products/${order_string}`,
      providesTags: ["Product"],

      // providesTags: ["Product"],
      // providesTags: (result) =>
      //   result
      //     ? [
      //         ...result.results.map(({ id }) => ({
      //           type: "Product" as const,
      //           id,
      //         })),
      //         { type: "Product", id: "LIST" },
      //       ]
      //     : [{ type: "Product", id: "LIST" }],
      // keepUnusedDataFor: 300000,
    }),
    getProductById: builder.query({
      query: (id) => `products/${id}/`,

      // providesTags: (result) =>
      //   result
      //     ? [
      //         { type: "Products", id: "LIST" }, // Cache for the product list
      //         ...result.results.map(({ id }) => ({ type: "Product", id })), // Cache individual products
      //       ]
      //     : [], // Empty array if no data
    }),
    // Define other endpoints like adding/updating products
    // For example, adding a product might invalidate the cache
    // addProduct: builder.mutation({
    //   query: (newProduct) => ({
    //     url: "api/products/",
    //     method: "POST",
    //     body: newProduct,
    //   }),
    //   invalidatesTags: [{ type: "Products", id: "LIST" }], // Invalidate product list cache after adding a product
    // }),
    // updateProduct: builder.mutation({
    //   query: (updatedProduct) => ({
    //     url: `api/products/${updatedProduct.id}`,
    //     method: "PUT",
    //     body: updatedProduct,
    //   }),
    //   invalidatesTags: (result, error, { id }) => [{ type: "Product", id }],
    // }),
    getFeatruedProducts: builder.query<FeaturedDataType, void>({
      query: () => "api/products/featured/",
    }),

    // Optional: Set default cache time and other cache settings
    // keepUnusedDataFor: 60, // Cache is kept for 60 seconds before being invalidated
    // refetchOnMountOrArgChange: true, // Optional: Re-fetch if the component mounts again
  }),
  // overrideExisting: false,
});

export const { useGetProductsQuery, useGetFeatruedProductsQuery } = productApi;
