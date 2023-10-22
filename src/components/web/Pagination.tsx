import clsx from "clsx";
import { Dispatch, SetStateAction, useEffect } from "react";

function Pagination({
  count,
  itemPerPage,
  currentPage,
  setCurrentPage,
}: {
  count: number;
  itemPerPage: number;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}) {
  const arrLength = Math.ceil(count / itemPerPage);
  const arr = Array.from(Array(arrLength).keys());

  function handleClick(item: number) {
    window.scrollTo({ top: 500, behavior: "smooth" });
    setCurrentPage(item);
  }

  return (
    <div className="block text-center">
      <div className="flex gap-2">
        {arr.map((item: number) => (
          <button
            key={item}
            onClick={() => handleClick(item)}
            className={clsx(
              "h-[44px] w-[44px] bg-gold/10 text-gold font-bold rounded-md border border-gold/20",
              currentPage == item && "bg-gold/100 text-white"
            )}
          >
            {item + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Pagination;
