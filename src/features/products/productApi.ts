import { baseApi } from "../base/baseApi";
import {
  DataType,
  FeaturedDataType,
  ProductDetailsType,
} from "../../types/ProductTypes";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Fetch all products
    getProducts: builder.query<DataType, void>({
      query: () => `api/products/`,
      providesTags: ["Product"], // Tag all products for cache invalidation
    }),

    // Fetch a specific product by ID
    getProductById: builder.query<ProductDetailsType, string | undefined>({
      query: (product_id) => `api/products/${product_id}/`,
      providesTags: (result, error, product_id) => [
        { type: "Product", id: product_id },
      ], // Tag individual products by ID
    }),

    // Add a new product
    addProduct: builder.mutation({
      query: (newProduct) => ({
        url: "api/products/",
        method: "POST",
        body: newProduct,
      }),
      invalidatesTags: ["Product"], // Invalidate all products to refresh the product list
    }),

    // Update an existing product
    updateProduct: builder.mutation({
      query: (updatedProduct) => ({
        url: `api/products/${updatedProduct.id}`,
        method: "PUT",
        body: updatedProduct,
      }),
      invalidatesTags: (result, error, updatedProduct) => [
        { type: "Product", id: updatedProduct.id },
      ], // Invalidate the specific product to refresh its data
    }),

    // Fetch featured products
    getFeatruedProducts: builder.query<FeaturedDataType, void>({
      query: () => "api/products/featured/",
      providesTags: ["FeaturedProduct"], // Tag featured products for cache control
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetFeatruedProductsQuery,
  useGetProductByIdQuery,
  useAddProductMutation,
  useUpdateProductMutation,
} = productApi;
