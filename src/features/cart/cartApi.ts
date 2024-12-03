import { baseApi } from "../base/baseApi";
import { CartType } from "../../types/CartType";

const cartApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Get the cart (caches the entire cart data)
    getCart: builder.query<CartType, void>({
      query: () => "api/cart/",
      providesTags: ["Cart"], // Tags the query result for invalidation
      onQueryStarted: async (arg, { queryFulfilled }) => {
        try {
          const { data } = await queryFulfilled;
          const sessionKey = data?.session_key;

          if (sessionKey) {
            sessionStorage.setItem("sessionKey", sessionKey); // Save sessionKey to sessionStorage
          }
        } catch ({ error }: any) {
          console.error("Error fetching session key:", error);
        }
      },
    }),

    // Get a single cart item by ID
    getCartItemByID: builder.query<CartType, string | number>({
      query: (cartItemId) => `api/cart/items/${cartItemId}/`,
      providesTags: (result, error, cartItemId) => [
        { type: "CartItem", id: cartItemId },
      ], // Cache each cart item by its ID
    }),

    // Add an item to the cart
    addToCart: builder.mutation({
      query: (cartItem) => ({
        url: `api/cart/items/`,
        method: "POST",
        body: cartItem,
      }),
      invalidatesTags: ["Cart"], // Invalidate the cart cache when adding an item
      onQueryStarted: async (arg, { queryFulfilled }) => {
        try {
          const { data } = await queryFulfilled;
          const sessionKey = data?.session_key;

          if (sessionKey) {
            sessionStorage.setItem("sessionKey", sessionKey); // Save sessionKey to sessionStorage
          }
        } catch ({ error }: any) {
          console.error("Error fetching session key in Add to Cart:", error);
        }
      },
    }),

    // Update a cart item
    updateCartItem: builder.mutation({
      query: ({ cartItem, cartItemId }) => ({
        url: `api/cart/items/${cartItemId}/`,
        method: "PATCH",
        body: cartItem,
      }),
      invalidatesTags: (result, error, { cartItemId }) => [
        { type: "CartItem", id: cartItemId },
        "Cart",
      ], // Invalidate the specific cart item and the whole cart cache
    }),

    // Remove a cart item
    removeCartItem: builder.mutation({
      query: ({ cartItemId }) => ({
        url: `api/cart/items/${cartItemId}/`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, { cartItemId }) => [
        { type: "CartItem", id: cartItemId },
        "Cart",
      ], // Invalidate the specific cart item and the whole cart cache
    }),
  }),
});

export const {
  useGetCartQuery,
  useGetCartItemByIDQuery,
  useAddToCartMutation,
  useUpdateCartItemMutation,
  useRemoveCartItemMutation,
} = cartApi;
