import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productsSelector } from "../../store/reducers/products";
import { getProductsThunk } from "../../store/thunk";
import { AppDispatch } from "../../store";

const ListProducts = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getProductsThunk());
  }, [dispatch]);

  const products = useSelector(productsSelector);
  console.log(products);
  return <div>ListProducts</div>;
};

export default ListProducts;
