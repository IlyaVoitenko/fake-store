import { useState } from "react";
import { Product } from "../../interfaces";
import PaginationDots from "./PaginationDots";
import ListProducts from "../../components/ListProducts";

interface Props {
  arr: Product[];
}

const Pagination = ({ arr }: Props) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const countItemsPage = 6;
  if (!arr) return;

  const totalPages = Math.ceil(arr.length / countItemsPage);
  const countMaxItemsPage = currentPage * countItemsPage;
  const countMinItemsPage = countMaxItemsPage - countItemsPage;

  const itemsPage = arr.slice(countMinItemsPage, countMaxItemsPage);

  return (
    <div className="mt-2 mb-4 flex flex-col justify-center items-center">
      <ListProducts arr={itemsPage} />
      <PaginationDots
        totalPages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default Pagination;
