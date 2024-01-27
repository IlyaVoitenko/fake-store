import BtnLike from "./BtnLike/BtnLike";
import { Product } from "../../interfaces";

interface Props {
  item: Product;
}

const ItemProduct = ({ item }: Props) => {
  const { rating, image, category, title, price } = item;
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center ">
      <div className="container">
        <div className="max-w-md w-full bg-gray-900 shadow-lg rounded-xl p-6">
          <div className="flex flex-col ">
            <div className="">
              <div className="relative h-62 w-full mb-3">
                <BtnLike />
                <img
                  src={image}
                  alt="Just a flower"
                  className=" w-full h-[400px]  object-fill  rounded-2xl"
                />
              </div>
              <div className="flex-auto justify-evenly">
                <div className="flex flex-wrap ">
                  <div className="w-full flex-none text-sm flex items-center text-gray-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-red-500 mr-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-gray-400 whitespace-nowrap mr-3">
                      {rating.rate}
                    </span>
                    <span className="mr-2 text-gray-400">{category}</span>
                  </div>
                  <div className="flex items-center w-full justify-between min-w-0 ">
                    <h2 className="text-lg mr-auto cursor-pointer text-gray-200 hover:text-purple-500 truncate ">
                      {title}
                    </h2>
                  </div>
                </div>
                <div className="text-xl text-white font-semibold mt-1">
                  $ {price}
                </div>
                <div className="flex mt-5 space-x-2 text-sm font-medium justify-start">
                  <button className="transition ease-in duration-300 inline-flex items-center text-sm font-medium mb-2 md:mb-0 bg-purple-500 px-5 py-2 hover:shadow-lg tracking-wider text-white rounded-full hover:bg-purple-600 ">
                    <span>Buy</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemProduct;