import axios, { AxiosResponse, isAxiosError } from "axios";

export const getProducts = async () => {
  try {
    const { data }: AxiosResponse = await axios.get(
      "https://fakestoreapi.com/products"
    );
    return data;
  } catch (error) {
    isAxiosError(error)
      ? console.error("axios error :", error)
      : console.error("general error :", error);
  }
};

export const getProductById = async (id: number) => {
  try {
    const { data }: AxiosResponse = await axios.get(
      `https://fakestoreapi.com/products/${id}`
    );
    return data;
  } catch (error) {
    isAxiosError(error)
      ? console.error("axios error :", error)
      : console.error("general error :", error);
  }
};
