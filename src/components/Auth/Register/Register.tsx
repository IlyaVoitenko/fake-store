import { Link } from "react-router-dom";
import { initialRegisterForm } from "../constants";
import {
  handleSubmitRegisterForm,
  validateEmail,
  validateUserName,
  validatePassword,
  validateName,
} from "../../helpers";
import { Formik, Form, Field } from "formik";

const Register = () => {
  return (
    <div className="flex md:w-1/2 justify-center py-10 items-center bg-white max-lg:h-full">
      <Formik
        initialValues={initialRegisterForm}
        onSubmit={handleSubmitRegisterForm}
      >
        {({ errors, touched }) => (
          <Form className="bg-white text-black">
            <h1 className="text-gray-800 font-bold text-2xl mb-1">Register</h1>
            {errors.firstName && touched.firstName && (
              <div className="flex text-center ">
                <label className="bg-red-700 rounded-lg text-white pt-1 pb-1 w-full">
                  Error :{errors.firstName}
                </label>
              </div>
            )}
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                />
              </svg>
              <Field
                className="pl-2 outline-none border-none bg-white"
                type="text"
                name="firstName"
                placeholder="First name"
                validate={validateName}
              />
            </div>
            {errors.lastName && touched.lastName && (
              <div className="flex text-center ">
                <label className="bg-red-700 rounded-lg text-white pt-1 pb-1 w-full">
                  Error :{errors.lastName}
                </label>
              </div>
            )}
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                />
              </svg>
              <Field
                className="pl-2 outline-none border-none bg-white"
                type="text"
                name="lastName"
                placeholder="Last name"
                validate={validateName}
              />
            </div>
            {errors.userName && touched.userName && (
              <div className="flex text-center ">
                <label className="bg-red-700 rounded-lg text-white pt-1 pb-1 w-full">
                  Error :{errors.userName}
                </label>
              </div>
            )}
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                />
              </svg>
              <Field
                className="pl-2 outline-none border-none bg-white"
                type="text"
                name="userName"
                placeholder="User name"
                validate={validateUserName}
              />
            </div>
            {errors.email && touched.email && (
              <div className="flex text-center ">
                <label className="bg-red-700 rounded-lg text-white pt-1 pb-1 w-full">
                  Error :{errors.email}
                </label>
              </div>
            )}
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>

              <Field
                className="pl-2 outline-none border-none bg-white"
                type="email"
                name="email"
                placeholder="Email Address"
                validate={validateEmail}
              />
            </div>
            {errors.password && touched.password && (
              <div className="flex text-center ">
                <label className="bg-red-700 rounded-lg text-white pt-1 pb-1 w-full">
                  Error :{errors.password}
                </label>
              </div>
            )}
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clipRule="evenodd"
                />
              </svg>
              <Field
                className="pl-2 outline-none border-none bg-white"
                type="password"
                name="password"
                placeholder="Password"
                validate={validatePassword}
              />
            </div>
            <button
              type="submit"
              className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
            >
              Create
            </button>
            <Link to={"/auth/login"}>
              <button
                type="submit"
                className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
              >
                Login
              </button>
            </Link>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Register;
