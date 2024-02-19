import { Stripe, StripeElements } from "@stripe/stripe-js";
import { SetStateAction } from "react";

export interface IProduct {
  category: string;
  description: string;
  id: number | string;
  image: string;
  price: number;
  rating: { rate: number; count: number };
  title: string;
}
export interface IProductsSliceInit {
  listProducts: IProduct[];
  product: IProduct;
}
export interface IUser {
  id?: number;
  email: string;
  username: string;
  password: string;
  name: {
    firstname: string;
    lastname: string;
  };
  address?: {
    city: string;
    street: string;
    number: number;
    zipcode: string;
    geolocation: {
      lat: string;
      long: string;
    };
  };
  phone?: string;
}
export interface IErrorMessageAuthUser {
  status: number | null;
  message: string | null;
}
export interface AuthSliceInit {
  error: IErrorMessageAuthUser;
  token: string | null;
  user: IUser | null;
  isAddedNewUser: boolean;
}
export interface ILoadingSliceInit {
  loading: boolean;
}
export interface IFormLoginInit {
  username: string;
  password: string;
}
export interface IFormRegisterInit extends IFormLoginInit {
  firstName: string;
  lastName: string;
  email: string;
}
export interface IMessagePayment {
  (value: SetStateAction<MessagePaymentType>): void;
  (arg0: string | undefined | { error: { message: string } }): void;
}
export interface IsProcessing {
  (value: SetStateAction<boolean>): void;
  (arg0: boolean): void;
}
export type MessagePaymentType =
  | string
  | { error: { message: string } }
  | undefined;
export type StripeType = Stripe | null;
export type ElementsType = StripeElements | null;
export type validateFunck = string | null;
