import { createSlice } from "@reduxjs/toolkit";
import { LoadingSliceInit } from "../../../interfaces";
import {
  getAuthTokenThunk,
  getProductsThunk,
  createUserThunk,
} from "../../thunk";

const initialState: LoadingSliceInit = {
  loading: false,
};

export const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAuthTokenThunk.fulfilled, (state) => {
      state.loading = !state.loading;
    });
    builder.addCase(getAuthTokenThunk.pending, (state) => {
      state.loading = !state.loading;
    });
    builder.addCase(getAuthTokenThunk.rejected, (state) => {
      state.loading = !state.loading;
    });
    builder.addCase(getProductsThunk.fulfilled, (state) => {
      state.loading = !state.loading;
    });
    builder.addCase(getProductsThunk.pending, (state) => {
      state.loading = !state.loading;
    });
    builder.addCase(getProductsThunk.rejected, (state) => {
      state.loading = !state.loading;
    });
    builder.addCase(createUserThunk.fulfilled, (state) => {
      state.loading = !state.loading;
    });
    builder.addCase(createUserThunk.pending, (state) => {
      state.loading = !state.loading;
    });
    builder.addCase(createUserThunk.rejected, (state) => {
      state.loading = !state.loading;
    });
  },
  selectors: {
    isLoadingSelector: (state) => state.loading,
  },
});
export const { isLoadingSelector } = loadingSlice.selectors;

export default loadingSlice.reducer;
