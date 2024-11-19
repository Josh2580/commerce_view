import { baseApi } from "../base/baseApi";
import { StoreDataType } from "../../types/StoreType";

const storeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getStore: builder.query<StoreDataType, void>({
      query: () => "api/stores/",
    }),
    getStoreById: builder.query({
      query: (store_id) => `api/store/${store_id}/`,
    }),
    getStoreProducts: builder.query({
      query: (store_id) => `api/store/${store_id}/products`,
    }),
  }),
});

export const { useGetStoreQuery } = storeApi;
