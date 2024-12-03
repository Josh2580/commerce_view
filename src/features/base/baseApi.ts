import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../../app/store";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://127.0.0.1:8000",
    credentials: "include", // Include cookies in all requests
    prepareHeaders: (headers, { getState }) => {
      let accessToken = (getState() as RootState).auth.accessToken;
      const sessionKey = sessionStorage.getItem("sessionKey");
      if (sessionKey) {
        headers.set("X-Session-Key", sessionKey); // Custom header for session key
      }
      if (accessToken) {
        headers.set("authorization", `Bearer ${accessToken}`); // Custom header for session key
      }
      return headers;
    },
  }),
  tagTypes: [
    "Product",
    "FeaturedProduct",
    "Cart",
    "CartItem",
    "Category",
    "FilteredProducts",
    "SubCategoryProducts",
    "SubCategory",
  ],
  endpoints: () => ({}),
});

// export const {} = baseApi;
