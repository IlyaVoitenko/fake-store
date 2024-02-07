import { Stripe, StripeElements } from "@stripe/stripe-js";
import { SetStateAction } from "react";

export interface Product {
  category: string;
  description: string;
  id: number | string;
  image: string;
  price: number;
  rating: { rate: number; count: number };
  title: string;
}
export interface ProductsSliceInit {
  listProducts: Product[];
  product: Product;
}
export interface User {
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
export interface errorMessageAuthUser {
  status: number | null;
  message: string | null;
}
export interface AuthSliceInit {
  error: errorMessageAuthUser;
  token: string | null;
  user: User | null;
  isAddedNewUser: boolean;
}
export interface LoadingSliceInit {
  loading: boolean;
}
export interface FormLoginInit {
  username: string;
  password: string;
}
export interface FormRegisterInit extends FormLoginInit {
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
