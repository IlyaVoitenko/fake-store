import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getProducts,
  getProductById,
  getTokenUser,
  createNewUser,
  getUserById,
} from "../../API";
import {
  IProduct,
  IFormLoginInit,
  AuthSliceInit,
  IFormRegisterInit,
  IUser,
} from "../../interfaces";

export const getProductsThunk = createAsyncThunk<IProduct[]>(
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

export const getProductByIdThunk = createAsyncThunk<IProduct, number>(
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

export const getAuthTokenThunk = createAsyncThunk<
  AuthSliceInit,
  IFormLoginInit
>("auth/getAuthTokenThunk", async (body, { rejectWithValue }) => {
  try {
    const data = await getTokenUser(body);
    return data;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const createUserThunk = createAsyncThunk<IUser, IFormRegisterInit>(
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
