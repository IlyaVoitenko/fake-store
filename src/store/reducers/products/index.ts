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
  isLoading: false,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProductsThunk.fulfilled, (state, { payload }) => {
      state.listProducts = payload;
      state.isLoading = false;
    });
    builder.addCase(getProductsThunk.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getProductByIdThunk.fulfilled, (state, { payload }) => {
      state.product = payload;
      state.isLoading = false;
    });
    builder.addCase(getProductByIdThunk.pending, (state) => {
      state.isLoading = true;
    });
  },
  selectors: {
    productsSelector: (state) => state.listProducts,
    productSelector: (state) => state.product,
    isLoadingSelector: (state) => state.isLoading,
  },
});
export const { productsSelector, productSelector, isLoadingSelector } =
  productsSlice.selectors;

export default productsSlice.reducer;
