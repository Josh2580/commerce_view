import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "../features/base/baseApi";
import { setupListeners } from "@reduxjs/toolkit/query";

// import { authApi } from "../features/auth/authApi";
// import { productApi } from "../features/products/productApi";
import authReducer from "../features/auth/authSlice";
import productReducer from "../features/products/productSlice";
import headerReducer from "../features/header/headerSlice";
import productSortReducer from "../features/products/productSortSlice";
import productFilterReducer from "../features/products/productFilterSlice";

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    // [authApi.reducerPath]: authApi.reducer,
    // [productApi.reducerPath]: productApi.reducer,
    auth: authReducer,
    products: productReducer,
    productSort: productSortReducer,
    productFilter: productFilterReducer,
    header: headerReducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      baseApi.middleware
      // authApi.middleware
      // productApi.middleware
    ),
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
