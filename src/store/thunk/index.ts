import { createAsyncThunk } from "@reduxjs/toolkit";
import { getProducts, getProductById, getTokenUser } from "../../API";
import { Product, FormLoginInit, AuthSliceInit } from "../../interfaces";

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

export const getAuthTokenThunk = createAsyncThunk<AuthSliceInit, FormLoginInit>(
  "auth/getAuthTokenThunk",
  async (body, { rejectWithValue }) => {
    try {
      const data = await getTokenUser(body);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
