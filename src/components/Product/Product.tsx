import { useSelector } from "react-redux";
import { productSelector } from "../../store/reducers/products";

const Product = () => {
  const product = useSelector(productSelector);
  const { image, description, category, title, rating } = product;
  return (
    <div className="container flex flex-row">
      <div className="flex justify-center items-center">
        <img src={image} className="h-[70%]" />
      </div>
      <div className="flex flex-col pl-3 pt-5 justify-center items-start">
        <span className="mt-2 mb-2 text-gray-400">{category} </span>
        <div className="w-full flex-none text-sm flex items-center text-gray-600">
          <span className="mr-2 text-white">{title}</span>
          <span className="text-white whitespace-nowrap mr-3">
            | {rating.rate}
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-red-500 mr-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        </div>
        <span className="mt-2">{description}</span>
        <div className="flex mt-5 space-x-2 text-sm font-medium justify-start">
          <button
            className="transition ease-in duration-300 inline-flex items-center text-sm font-medium mb-2 md:mb-0 bg-purple-500 px-5 py-2 hover:shadow-lg tracking-wider text-white rounded-full hover:bg-purple-600 "
            onClick={() => {}}
          >
            Buy
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
