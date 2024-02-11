import ItemProduct from "../ItemProduct";
import { Product } from "../../interfaces";

interface Props {
  arr: Product[];
}

const ListProducts = ({ arr }: Props) => {
  return (
    <div className="flex flex-row flex-wrap justify-around max-md:w-full">
      {arr && arr.map((item) => <ItemProduct key={item.id} item={item} />)}
    </div>
  );
};

export default ListProducts;
