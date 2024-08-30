import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "../features/auth/authApi";
import { productApi } from "../features/products/productApi";
import authReducer from "../features/auth/authSlice";
import productReducer from "../features/products/productSlice";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
    auth: authReducer,
    products: productReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, productApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
