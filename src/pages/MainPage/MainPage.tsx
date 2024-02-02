import { useEffect } from "react";
import { getProductsThunk } from "../../store/thunk";
import { AppDispatch } from "../../store";
import { useDispatch } from "react-redux";
import Pagination from "../../components/Pagination";
import { useSelector } from "react-redux";
import { productsSelector } from "../../store/reducers/products";
import { isLoadingSelector } from "../../store/reducers/loading";
import Loading from "../../components/Loading";

const MainPage = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getProductsThunk());
  }, [dispatch]);

  const products = useSelector(productsSelector);
  const isLoading = useSelector(isLoadingSelector);

  if (isLoading) return <Loading />;

  return <Pagination arr={products} />;
};

export default MainPage;
