import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-row justify-center items-center w-screen h-screen ">
      <span>Page not found :</span>
      <button className="ml-2" onClick={() => navigate(`/`)}>
        go home
      </button>
    </div>
  );
};

export default PageNotFound;
