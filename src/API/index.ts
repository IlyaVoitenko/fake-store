import axios, { AxiosResponse, isAxiosError } from "axios";
import { FormLoginInit, FormRegisterInit, User } from "../interfaces";

export const getProducts = async () => {
  try {
    const { data }: AxiosResponse = await axios.get(
      "https://fakestoreapi.com/products"
    );
    return data;
  } catch (error) {
    if (isAxiosError(error)) {
      const { data, status } = error.response || {};
      throw { status, message: data };
    } else {
      throw error;
    }
  }
};

export const getProductById = async (id: number) => {
  try {
    const { data }: AxiosResponse = await axios.get(
      `https://fakestoreapi.com/products/${id}`
    );
    return data;
  } catch (error) {
    if (isAxiosError(error)) {
      const { data, status } = error.response || {};
      throw { status, message: data };
    } else {
      throw error;
    }
  }
};

export const getTokenUser = async (body: FormLoginInit) => {
  try {
    const { data }: AxiosResponse = await axios.post(
      `https://fakestoreapi.com/auth/login`,
      { ...body }
    );
    return data;
  } catch (error) {
    if (isAxiosError(error)) {
      const { data, status } = error.response || {};
      throw { status, message: data };
    } else {
      throw error;
    }
  }
};

export const createNewUser = async (
  newUser: FormRegisterInit
): Promise<{ id: number }> => {
  try {
    const { email, username, password, firstName, lastName } = newUser;
    const dataNewUser: User = {
      email,
      username,
      password,
      name: {
        firstname: firstName,
        lastname: lastName,
      },
    };
    const { data }: AxiosResponse = await axios.post(
      `https://fakestoreapi.com/users`,
      dataNewUser
    );
    return data;
  } catch (error) {
    if (isAxiosError(error)) {
      const { data, status } = error.response || {};
      throw { status, message: data };
    } else {
      throw error;
    }
  }
};

export const getUserById = async (id: number): Promise<User> => {
  try {
    const { data }: AxiosResponse = await axios.get(
      `https://fakestoreapi.com/users/${id}`
    );
    return data;
  } catch (error) {
    if (isAxiosError(error)) {
      const { data, status } = error.response || {};
      throw { status, message: data };
    } else {
      throw error;
    }
  }
};
