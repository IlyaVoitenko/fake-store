import { createSlice } from "@reduxjs/toolkit";
import { ProductsSliceInit } from "../../../interfaces";
import { getProductsThunk, getProductByIdThunk } from "../../thunk";

const initialState: ProductsSliceInit = {
  listProducts: [],
  product: {
    category: "",
    description: "",
    id: "",
    image: "",
    price: 0,
    rating: {
      rate: 0,
      count: 0,
    },
    title: "",
  },
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProductsThunk.fulfilled, (state, { payload }) => {
      state.listProducts = payload;
    });
    builder.addCase(getProductByIdThunk.fulfilled, (state, { payload }) => {
      state.product = payload;
    });
  },
  selectors: {
    productsSelector: (state) => state.listProducts,
    productSelector: (state) => state.product,
  },
});
export const { productsSelector, productSelector } = productsSlice.selectors;

export default productsSlice.reducer;
