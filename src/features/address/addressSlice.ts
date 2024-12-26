import { createSlice } from "@reduxjs/toolkit";

interface AddressState {
  addressID: string | null;
  // info: {};
}

const initialState: AddressState = {
  addressID: localStorage.getItem("addressID")
    ? localStorage.getItem("addressID")
    : null,
  // info: {},
};

const AddressSlice = createSlice({
  name: "address",
  initialState,
  reducers: {
    setAddressID: (state, { payload }) => {
      state.addressID = payload;
      localStorage.setItem("addressID", payload);
    },
    // setAddressInfo: (state, { payload }) => {
    //   state.info = payload;
    //   localStorage.setItem("addressInfo", payload);
    // },
    clearAddress: (state) => {
      localStorage.removeItem("addressID");
      // localStorage.removeItem("addressInfo");
      state.addressID = null;
      // state.info = {};
    },
  },
});

export const { setAddressID, clearAddress } = AddressSlice.actions;
export default AddressSlice.reducer;
