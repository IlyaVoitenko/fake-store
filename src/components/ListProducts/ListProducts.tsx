import ItemProduct from "../ItemProduct";
import { IProduct } from "../../interfaces";

interface Props {
  arr: IProduct[];
}

const ListProducts = ({ arr }: Props) => {
  return (
    <div className="flex flex-row flex-wrap justify-around max-md:w-full">
      {arr && arr.map((item) => <ItemProduct key={item.id} item={item} />)}
    </div>
  );
};

export default ListProducts;
