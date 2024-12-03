import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
  accessToken: string | null;
}

const initialState: AuthState = {
  accessToken: localStorage.getItem("accessKey")
    ? localStorage.getItem("accessKey")
    : null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, { payload }) => {
      state.accessToken = payload;
      localStorage.setItem("accessKey", payload);
    },
    logout: (state) => {
      localStorage.removeItem("accessKey");
      state.accessToken = null;
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
