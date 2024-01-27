import ItemProduct from "../ItemProduct";
import { Product } from "../../interfaces";

interface Props {
  arr: Product[];
}

const ListProducts = ({ arr }: Props) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-row flex-wrap justify-around">
        {arr &&
          arr.map((item) => {
            return <ItemProduct key={item.id} item={item} />;
          })}
      </div>
    </div>
  );
};

export default ListProducts;
