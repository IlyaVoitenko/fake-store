import { useEffect } from "react";
import { getProductsThunk } from "../../store/thunk";
import { AppDispatch } from "../../store";
import { useDispatch } from "react-redux";
import Pagination from "../../components/Pagination";
import { useSelector } from "react-redux";
import { productsSelector } from "../../store/reducers/products";

const MainPage = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getProductsThunk());
  }, [dispatch]);

  const products = useSelector(productsSelector);

  return <Pagination arr={products} />;
};

export default MainPage;
