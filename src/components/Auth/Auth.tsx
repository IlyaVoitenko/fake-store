import { useParams } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";

const Auth = () => {
  const { auth } = useParams();
  return (
    <div className="h-screen w-screen md:flex">
      <div className="relative max-lg:block   overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700  justify-around items-center   ">
        <div className="max-md:hidden">
          <h1 className="text-white font-bold text-4xl font-sans">Auth user</h1>
        </div>
        <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
      </div>
      {auth === "login" ? <Login /> : <Register />}
    </div>
  );
};

export default Auth;
