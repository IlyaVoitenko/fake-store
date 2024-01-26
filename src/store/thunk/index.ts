import { createAsyncThunk } from "@reduxjs/toolkit";
import { getProducts } from "../../API";
import { Product } from "../../interfaces";

export const getProductsThunk = createAsyncThunk<Product[]>(
  "products/getProductsThunk",
  async (_, { rejectWithValue }) => {
    try {
      const data = await getProducts();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
