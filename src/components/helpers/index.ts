import {
  FormRegisterInit,
  validateFunck,
  FormLoginInit,
} from "../../interfaces";

export const handleSubmitRegisterForm = (values: FormRegisterInit) => {
  console.log("values:", values);
};
export const handleSubmitLoginForm = (values: FormLoginInit) => {
  console.log("values:", values);
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
  if (password.length < 8)
    return (errorMsg = "Password must be at least 8 characters long.");
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
