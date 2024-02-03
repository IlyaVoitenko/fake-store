import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getProducts,
  getProductById,
  getTokenUser,
  createNewUser,
  getUserById,
} from "../../API";
import {
  Product,
  FormLoginInit,
  AuthSliceInit,
  FormRegisterInit,
  User,
} from "../../interfaces";

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

export const createUserThunk = createAsyncThunk<User, FormRegisterInit>(
  "auth/createUserThunk",
  async (newUserData, { rejectWithValue }) => {
    try {
      const { id: idNewUser } = await createNewUser(newUserData);
      const newUser = await getUserById(idNewUser);

      return newUser;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
