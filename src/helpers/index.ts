import { NavigateFunction } from "react-router-dom";
import {
  FormRegisterInit,
  validateFunck,
  FormLoginInit,
  StripeType,
  ElementsType,
  IMessagePayment,
  IsProcessing,
} from "../interfaces";
import { AppDispatch } from "../store";
import { getAuthTokenThunk, createUserThunk } from "../store/thunk";
import { FormEvent } from "react";
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
  setIsProcessing: IsProcessing,
  setMessage: IMessagePayment
) => {
  e.preventDefault();
  if (!stripe || !elements) return;
  setIsProcessing(true);

  const { error, paymentIntent } = await stripe.confirmPayment({
    elements,
    confirmParams: {
      return_url: `${window.location.origin}/completion`,
    },
    redirect: "if_required",
  });

  if (error) setMessage(error.message);
  else if (paymentIntent && paymentIntent.status === "succeeded")
    setMessage(`Payment status : ${paymentIntent.status}`);
  else setMessage("Unexpected status");

  setIsProcessing(false);
};

export const getSecretClient = async () => {
  const { data } = await axios.post(
    `${import.meta.env.VITE_SERVER_URL}/payment-intents`
  );
  return data.client_secret;
};
