import { createAsyncThunk } from "@reduxjs/toolkit";
import { getProducts, getProductById } from "../../API";
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

export const getProductByIdThunk = createAsyncThunk<Product, number>(
  "products/getProductByIdThunk",
  async (id, { rejectWithValue }) => {
    try {
      const data = await getProductById(id);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
