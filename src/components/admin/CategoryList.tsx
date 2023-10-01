import { CategoryType } from "@/data/category";
import { cn } from "@/helper/cn";
import Link from "next/link";
import React from "react";

function handleActiveLink(
  id: string | undefined,
  categoryIdParams: string | undefined
) {
  return id === categoryIdParams ? "bg-lightgreen/20 text-gold" : "";
}

function CategoryList({
  category,
  categoryId,
  setCurrentId,
}: {
  category: CategoryType;
  categoryId: string | undefined;
  setCurrentId: React.Dispatch<React.SetStateAction<string | undefined>>;
}) {
  return (
    <div>
      {category.map((cate) => (
        <div key={cate.id}>
          <button
            className={cn(
              `px-2 py-1 my-1 block w-full text-left hover:bg-lightgreen/20 rounded-md overflow-hidden text-green`,
              handleActiveLink(cate.id, categoryId)
            )}
            onClick={() => setCurrentId(cate.id)}
          >
            <div className="">{cate.name}</div>
          </button>
          <div className="pl-3">
            {cate.sub &&
              cate.sub.length > 0 &&
              cate.sub.map((sub) => (
                <button
                  className={cn(
                    `px-2 py-1 my-1 block w-full text-left hover:bg-lightgreen/20 rounded-md overflow-hidden text-green`,
                    handleActiveLink(cate.id + "." + sub.id, categoryId)
                  )}
                  key={sub.id}
                  onClick={() => setCurrentId(cate.id + "." + sub.id)}
                >
                  <div className="">{sub.name}</div>
                </button>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default CategoryList;
