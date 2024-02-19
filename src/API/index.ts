import axios, { AxiosResponse, isAxiosError } from "axios";
import { IFormLoginInit, IFormRegisterInit, IUser } from "../interfaces";

/**
 * function for receive a list of product
 * @returns {IUser[]} products list
 */
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
/**
 * function for receive a product by id
 * @param  {number} id - id product
 * @returns {IUser} data - product
 */
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
/**
 * function for check user and if user is access get token of user
 * @param {IFormLoginInit} body  - get a login and password of user
 * @returns  {{token: number}}token object
 */
export const getTokenUser = async (body: IFormLoginInit) => {
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
/**
 * function for create new user
 * @param {IFormRegisterInit} newUser - data new user
 * @returns {id:number} get a object has include a id's field
 */
export const createNewUser = async (
  newUser: IFormRegisterInit
): Promise<{ id: number }> => {
  try {
    const { email, username, password, firstName, lastName } = newUser;
    const dataNewUser: IUser = {
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
/**
 * function for get data of user by id
 * @param id - id of user
 * @returns {IUser} data of user
 */
export const getUserById = async (id: number): Promise<IUser> => {
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
