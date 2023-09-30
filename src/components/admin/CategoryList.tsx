import { CategoryType } from "@/data/category";
import { cn } from "@/helper/cn";
import Link from "next/link";
import React from "react";

function handleActiveLink(id: string, categoryIdParams: string) {
  return id === categoryIdParams ? "bg-red-300" : "";
}

function CategoryList({
  category,
  categoryId,
}: {
  category: CategoryType;
  categoryId: string;
}) {
  return (
    <div>
      {category.map((cate) => (
        <div key={cate.id}>
          <Link
            className={cn(
              `px-2 py-1 my-1 block hover:bg-red-300 rounded-md overflow-hidden`,
              handleActiveLink(cate.id, categoryId)
            )}
            href={cate.id}
          >
            <div className="">{cate.name}</div>
          </Link>
          <div className="pl-3">
            {cate.sub &&
              cate.sub.length > 0 &&
              cate.sub.map((sub) => (
                <Link
                  className={cn(
                    `px-2 py-1 my-1 block hover:bg-red-300 rounded-md overflow-hidden`,
                    handleActiveLink(cate.id + "." + sub.id, categoryId)
                  )}
                  key={sub.id}
                  href={cate.id + "." + sub.id}
                >
                  <div className="">{sub.name}</div>
                </Link>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default CategoryList;
