import { NavigateFunction } from "react-router-dom";
import { CardElement } from "@stripe/react-stripe-js";

import {
  FormRegisterInit,
  validateFunck,
  FormLoginInit,
  StripeType,
  ElementsType,
} from "../interfaces";
import { AppDispatch } from "../store";
import { getAuthTokenThunk, createUserThunk } from "../store/thunk";
import { FormEvent, SetStateAction } from "react";

import axios from "axios";

export const handleSubmitRegisterForm = (
  values: FormRegisterInit,
  dispatch: AppDispatch,
  isAddedNewUser: boolean,
  navigate: NavigateFunction
) => {
  if (isAddedNewUser) return navigate("/");
  dispatch(createUserThunk({ ...values }));
};
export const handleSubmitLoginForm = (
  values: FormLoginInit,
  dispatch: AppDispatch
) => {
  const { username, password } = values;
  dispatch(getAuthTokenThunk({ username, password }));
};
export const validateEmail = (value: string): validateFunck => {
  let errorMsg = null;
  if (!value) errorMsg = "Required";
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value))
    errorMsg = "Invalid email address";
  return errorMsg;
};
export const validateUserName = (username: string): validateFunck => {
  let errorMsg = null;
  if (!username) return (errorMsg = "Required");

  const pattern: RegExp =
    /^[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){1,14}[a-zA-Z0-9]$/;
  if (!pattern.test(username)) return (errorMsg = "Invalid email user name");

  return errorMsg;
};
export const validatePassword = (password: string): validateFunck => {
  let errorMsg = null;
  if (password.length < 6)
    return (errorMsg = "Password must be at least 6 characters long.");
  if (!/\d/.test(password))
    return (errorMsg = "Password must contain at least one digit.");
  if (!/[a-zA-Z]/.test(password))
    return (errorMsg = "Password must contain at least one letter.");
  return errorMsg;
};
export const validateName = (name: string): validateFunck => {
  let errorMsg = null;
  if (!name.trim()) return (errorMsg = "Required.");
  if (name.length < 2)
    return (errorMsg = "Last name must be at least 2 characters long.");
  if (!/^[a-zA-Z-]*$/.test(name))
    return (errorMsg = "Last name can only contain letters and dashes.");

  return errorMsg;
};

export const handleSubmit = async (
  e: FormEvent<HTMLFormElement>,
  elements: ElementsType,
  stripe: StripeType,
  setSuccess: {
    (value: SetStateAction<boolean>): void;
    (arg0: boolean): void;
  }
) => {
  e.preventDefault();
  if (!stripe || !elements) return;

  const cardElement = elements.getElement(CardElement);

  if (!cardElement) return;

  try {
    const { paymentMethod, error } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (!error) {
      const { id } = paymentMethod;
      console.log(import.meta.env.VITE_SERVER_URL_PAYMENT);
      const response = await axios.post(
        import.meta.env.VITE_SERVER_URL_PAYMENT,
        {
          amount: 1000,
          id,
        }
      );
      const { client_secret, payment_method } = response.data.data;
      const { error } = await stripe.confirmCardPayment(
        client_secret,
        { payment_method },
        { handleActions: false }
      );
      if (!error) {
        console.log("Successful payment");
        setSuccess(true);
      } else {
        console.log(error.message);
      }
    } else {
      console.log(error.message);
    }
  } catch (error) {
    console.log("Error", error);
  }
};
