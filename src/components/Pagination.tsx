interface IPaginationProps {
  total: number;
  skip: number;
  limit: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({ total, skip, limit, onPageChange }: IPaginationProps) {
  const totalPages = Math.ceil(total / limit);
  console.log(total, "total");
  console.log(limit, "limit");
  console.log("totalPages", totalPages);
  const currentPage = Math.floor(skip / limit) + 1;

  const prevNextButtonDefaultClasses =
    "px-3 py-1 rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300";
  const prevButtonClasses =
    currentPage === 1
      ? `${prevNextButtonDefaultClasses} cursor-not-allowed opacity-50`
      : prevNextButtonDefaultClasses;
  const nextButtonClasses =
    currentPage === totalPages
      ? `${prevNextButtonDefaultClasses} cursor-not-allowed opacity-50`
      : prevNextButtonDefaultClasses;

  const countedButtonDefaultClasses =
    "px-3 py-1 rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300 cursor-pointer";
  const countedButtonClasses = (page: number) =>
    page === currentPage
      ? `px-3 py-1 rounded-md bg-blue-500 text-white hover:bg-blue-600`
      : countedButtonDefaultClasses;

  return (
    <div className="flex justify-center items-center gap-3 mt-6">
      <div className="flex justify-center mt-6 space-x-1">
        <button className={prevButtonClasses}>Prev</button>

        {[...Array(totalPages)].map((_, index) => {
          const page = index + 1;
          return (
            <button
              key={page}
              className={countedButtonClasses(page)}
              onClick={() => onPageChange(page)}>
              {page}
            </button>
          );
        })}
        <button className={nextButtonClasses}>Next</button>
      </div>
    </div>
  );
}
