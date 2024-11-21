import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ProductSortState {
  sortKey: string | null;
}

// Default value
const DEFAULT_SORT_KEY = "ordering=-total_sales";

// Load from sessionStorage if it exists, otherwise use the default
const initialState: ProductSortState = {
  sortKey: sessionStorage.getItem("productSortKey")
    ? sessionStorage.getItem("productSortKey")
    : DEFAULT_SORT_KEY,
};

export const productSortSlice = createSlice({
  name: "sort",
  initialState,
  reducers: {
    // Action to update the sortKey
    sortValue: (state, action: PayloadAction<string>) => {
      state.sortKey = action.payload;

      // Persist the updated sortKey in sessionStorage
      sessionStorage.setItem("productSortKey", action.payload);
    },
    // Action to reset the sortKey to default
    resetSortValue: (state) => {
      state.sortKey = DEFAULT_SORT_KEY;

      // Clear the value from sessionStorage
      sessionStorage.removeItem("productSortKey");
    },
  },
});

// Action creators are generated for each case reducer function
export const { sortValue, resetSortValue } = productSortSlice.actions;

export default productSortSlice.reducer;
