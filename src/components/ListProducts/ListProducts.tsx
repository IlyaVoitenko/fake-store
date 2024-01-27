import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productsSelector } from "../../store/reducers/products";
import { getProductsThunk } from "../../store/thunk";
import { AppDispatch } from "../../store";

import ItemProduct from "../ItemProduct";

const ListProducts = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getProductsThunk());
  }, [dispatch]);

  const products = useSelector(productsSelector);
  return (
    <div className="flex flex-wrap flex-row justify-around">
      {products &&
        products.map((item) => {
          return <ItemProduct key={item.id} item={item} />;
        })}
    </div>
  );
};

export default ListProducts;
