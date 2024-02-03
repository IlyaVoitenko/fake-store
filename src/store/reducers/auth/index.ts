import { createSlice } from "@reduxjs/toolkit";
import { AuthSliceInit, errorMessageAuthUser } from "../../../interfaces";
import { getAuthTokenThunk, createUserThunk } from "../../thunk";

const initialState: AuthSliceInit = {
  token: null,
  error: {
    status: null,
    message: null,
  },
  user: null,
  isAddedNewUser: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setIsAddedNewUser: (state, { payload }) => {
      state.isAddedNewUser = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAuthTokenThunk.fulfilled, (state, { payload }) => {
      state.token = payload.token;
      state.error = { status: null, message: null };
      state.isAddedNewUser = false;
    });
    builder.addCase(getAuthTokenThunk.rejected, (state, { payload }) => {
      const { status, message } = payload as errorMessageAuthUser;
      state.error = { status, message };
      state.isAddedNewUser = false;
    });
    builder.addCase(createUserThunk.fulfilled, (state, { payload }) => {
      state.user = payload;
      state.error = { status: null, message: null };
      state.isAddedNewUser = true;
    });
    builder.addCase(createUserThunk.pending, (state) => {
      state.isAddedNewUser = false;
    });
    builder.addCase(createUserThunk.rejected, (state, { payload }) => {
      const { status, message } = payload as errorMessageAuthUser;
      state.error = { status, message };
      state.isAddedNewUser = false;
    });
  },
  selectors: {
    tokenSelector: (state) => state.token,
    errorMessageSelector: (state) => state.error,
    isAddedNewUserSelector: (state) => state.isAddedNewUser,
  },
});
export const { tokenSelector, errorMessageSelector, isAddedNewUserSelector } =
  authSlice.selectors;

export const { setIsAddedNewUser } = authSlice.actions;

export default authSlice.reducer;
