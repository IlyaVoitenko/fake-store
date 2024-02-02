import { Link } from "react-router-dom";
import { initialLoginInForm } from "../constants";
import { errorMessageSelector } from "../../../store/reducers/auth";
import {
  validateUserName,
  validatePassword,
  handleSubmitLoginForm,
} from "../../helpers";
import { Formik, Form, Field } from "formik";
import { AppDispatch } from "../../../store";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const dispatch = useDispatch<AppDispatch>();
  const errorMessage = useSelector(errorMessageSelector);

  return (
    <div className="flex md:w-1/2 justify-center py-10 items-center bg-white max-lg:w-full max-lg:h-screen">
      <Formik
        initialValues={initialLoginInForm}
        onSubmit={(values) => handleSubmitLoginForm(values, dispatch)}
      >
        {({ errors, touched }) => (
          <Form className="bg-white text-black">
            <h1 className="text-gray-800 font-bold text-2xl mb-1">Log in </h1>
            {errorMessage.status && (
              <div className="flex text-center ">
                <span className="bg-red-700 rounded-lg text-white pt-1 pb-1 w-full">
                  {errorMessage.status} {errorMessage.message}
                </span>
              </div>
            )}
            {errors.username && touched.username && (
              <div className="flex text-center ">
                <label className="bg-red-700 rounded-lg text-white pt-1 pb-1 w-full">
                  Error :{errors.username}
                </label>
              </div>
            )}
            <div className="flex items-center mt-2 border-2 py-2 px-3 rounded-2xl mb-4">
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
                name="username"
                placeholder="Username"
                validate={validateUserName}
              />
            </div>
            {errors.password && touched.password && (
              <div className="flex text-center ">
                <label className="bg-red-700 rounded-lg text-white pt-1 pb-1 w-full">
                  Error :{errors.password}
                </label>
              </div>
            )}
            <div className="flex items-center mt-2  border-2 py-2 px-3 rounded-2xl">
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
            <span className="text-sm ml-2 text-blue-500 hover:text-blue-800 cursor-pointer">
              Forgot Password ?
            </span>
            <button
              type="submit"
              className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
            >
              Login
            </button>
            <Link to={"/auth/register"}>
              <button
                type="submit"
                className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
              >
                Register
              </button>
            </Link>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
