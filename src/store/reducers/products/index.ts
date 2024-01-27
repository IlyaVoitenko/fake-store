import { createSlice } from "@reduxjs/toolkit";
import { ProductsSliceInit } from "../../../interfaces";
import { getProductsThunk } from "../../thunk";

const initialState: ProductsSliceInit = {
  listProducts: [],
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProductsThunk.fulfilled, (state, { payload }) => {
      state.listProducts = payload;
    });
  },
  selectors: {
    productsSelector: (state) => state.listProducts,
  },
});
export const { productsSelector } = productsSlice.selectors;

export default productsSlice.reducer;
