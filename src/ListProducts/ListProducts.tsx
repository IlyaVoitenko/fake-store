import { useSelector } from "react-redux";
import { productsSelector } from "../store/reducers/products";

const ListProducts = () => {
  const products = useSelector(productsSelector);
  return <div>ListProducts</div>;
};

export default ListProducts;
