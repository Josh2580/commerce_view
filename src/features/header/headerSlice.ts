import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface HeaderState {
  searchIcon: boolean;
  searchBar: boolean;
  sortFilterIcon: boolean;
  isFilter: boolean;
  isSort: boolean;
}

const initialState: HeaderState = {
  searchIcon: true,
  searchBar: false,
  sortFilterIcon: false,
  isFilter: false,
  isSort: false,
};

export const headerSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    activateIcon: (state) => {
      (state.searchIcon = true), (state.searchBar = false);
    },
    activateBar: (state) => {
      (state.searchIcon = false), (state.searchBar = true);
    },
    setSortFilter: (state, action: PayloadAction<boolean>) => {
      state.sortFilterIcon = action.payload;
    },
    isFilter: (state, action: PayloadAction<boolean>) => {
      state.isFilter = action.payload;
      // console.log("Current Filter", action.payload);
    },
    isSort: (state, action: PayloadAction<boolean>) => {
      state.isSort = action.payload;
      // console.log("Current Filter", action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { activateIcon, activateBar, setSortFilter, isFilter, isSort } =
  headerSlice.actions;

export default headerSlice.reducer;
