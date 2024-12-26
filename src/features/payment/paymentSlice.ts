import { createSlice } from "@reduxjs/toolkit";

interface PaymentState {
  paymentID: string | null;
}

const initialState: PaymentState = {
  paymentID: localStorage.getItem("paymentID")
    ? localStorage.getItem("paymentID")
    : null,
};

const PaymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {
    setPaymentID: (state, { payload }) => {
      state.paymentID = payload;
      localStorage.setItem("paymentID", payload);
    },

    clearPayment: (state) => {
      localStorage.removeItem("paymentID");
      state.paymentID = null;
    },
  },
});

export const { setPaymentID, clearPayment } = PaymentSlice.actions;
export default PaymentSlice.reducer;
