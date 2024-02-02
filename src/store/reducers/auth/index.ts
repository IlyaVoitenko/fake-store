import { createSlice } from "@reduxjs/toolkit";
import { AuthSliceInit, errorMessageAuthUser } from "../../../interfaces";
import { getAuthTokenThunk } from "../../thunk";

const initialState: AuthSliceInit = {
  token: null,
  error: {
    status: null,
    message: null,
  },
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAuthTokenThunk.fulfilled, (state, { payload }) => {
      state.token = payload.token;
      state.error = { status: null, message: null };
    });
    builder.addCase(getAuthTokenThunk.rejected, (state, { payload }) => {
      const { status, message } = payload as errorMessageAuthUser;
      state.error = { status, message };
    });
  },
  selectors: {
    tokenSelector: (state) => state.token,
    errorMessageSelector: (state) => state.error,
  },
});
export const { tokenSelector, errorMessageSelector } = authSlice.selectors;

export default authSlice.reducer;
