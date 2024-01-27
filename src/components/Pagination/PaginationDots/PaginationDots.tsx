interface Props {
  currentPage: number;
  totalPages: number;
  setCurrentPage: any;
}

const PaginationDots = ({ totalPages, currentPage, setCurrentPage }: Props) => {
  return (
    <div>
      {Array.from({ length: totalPages }).map((_, index: number) => (
        <span
          key={index + 1}
          onClick={() => setCurrentPage(index + 1)}
          className={
            currentPage === index + 1
              ? "active bg-purple-500 text-white pr-2 pl-2  rounded-md not-italic"
              : "pr-2 pl-2 not-italic"
          }
        >
          {index + 1}
        </span>
      ))}
    </div>
  );
};

export default PaginationDots;
