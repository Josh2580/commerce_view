import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ProductFilterState {
  filterStoreKey: string | null;
}

// Default value
const DEFAULT_Filter_KEY = "";

// Load from sessionStorage if it exists, otherwise use the default
const initialState: ProductFilterState = {
  filterStoreKey: sessionStorage.getItem("productFilterStoreKey")
    ? sessionStorage.getItem("productFilterStoreKey")
    : DEFAULT_Filter_KEY,
};

export const productFilterSlice = createSlice({
  name: "sort",
  initialState,
  reducers: {
    // Action to update the sortKey
    filterStoreValue: (state, action: PayloadAction<string>) => {
      state.filterStoreKey = action.payload;

      // Persist the updated sortKey in sessionStorage
      sessionStorage.setItem("productFilterStoreKey", action.payload);
    },
    // Action to reset the sortKey to default
    resetFilterValue: (state) => {
      state.filterStoreKey = DEFAULT_Filter_KEY;

      // Clear the value from sessionStorage
      sessionStorage.removeItem("productFilterStoreKey");
    },
  },
});

// Action creators are generated for each case reducer function
export const { filterStoreValue, resetFilterValue } =
  productFilterSlice.actions;

export default productFilterSlice.reducer;
