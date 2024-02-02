import axios, { AxiosResponse, isAxiosError } from "axios";
import { FormLoginInit } from "../interfaces";

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
    console.log("data==  ", data);
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
