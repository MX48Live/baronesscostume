import CategoryHero from "@/components/web/CategoryHero";
import Gallery from "@/components/web/Gallery";
import { CategoryItemType, category } from "@/data/category";
import { notFound } from "next/navigation";
import { Suspense } from "react";

function CategoryPage({ params }: { params: { categoryId: string } }) {
  const categoryName = getCategoryName(params.categoryId, category);
  const categoryDescription = getCategoryDescription(
    params.categoryId,
    category
  );

  if (!categoryName) return notFound();

  return (
    <div>
      <CategoryHero
        categoryName={categoryName}
        description={categoryDescription}
      />
      <div className={"bg-bglight p-5"}>
        <Suspense>
          <Gallery categoryId={params.categoryId} />
        </Suspense>
      </div>
    </div>
  );
}
export default CategoryPage;

function getCategoryName(
  categoryId: string,
  category: CategoryItemType[]
): string | undefined {
  const cateArr = categoryId.split(".");
  if (cateArr.length == 1) {
    return category.find((cate) => cate.id == categoryId)?.name;
  }
  if (cateArr.length == 2) {
    const cate = category.find((cate) => cate.id == cateArr[0]);
    if (cate) {
      return cate.sub?.find((sub) => sub.id == cateArr[1])?.name;
    }
  }
}

function getCategoryDescription(
  categoryId: string,
  category: CategoryItemType[]
): string | undefined {
  const cateArr = categoryId.split(".");
  if (cateArr.length == 1) {
    return category.find((cate) => cate.id == categoryId)?.description;
  }
  if (cateArr.length == 2) {
    const cate = category.find((cate) => cate.id == cateArr[0]);
    if (cate) {
      return cate.sub?.find((sub) => sub.id == cateArr[1])?.description;
    }
  }
}

export function generateMetadata({
  params,
}: {
  params: { categoryId: string };
}) {
  const categoryName = getCategoryName(params.categoryId, category);
  return {
    title: "Baroness Costume - " + categoryName,
    description:
      "บริการเช่าชุดหลากหลายประเภท ชุดไทย ชุดไทยร่วมสมัย ชุดไทยประยุกต์ ชุดแฟนซี ชุดคอสเพลย์ ชุดลีดเดอร์ ชุดนานาชาติ ชุด AEC ชุดแดนซ์เซอร์ ชุดนักร้อง ชุดราตรี ชุดย้อนยุค ชุดเจ้าหญิง ชุดเจ้าชาย ชุดการแสดง ฯลฯ",
    openGraph: {
      title: "Baroness Costume - " + categoryName,
      description:
        "บริการเช่าชุดหลากหลายประเภท ชุดไทย ชุดไทยร่วมสมัย ชุดไทยประยุกต์ ชุดแฟนซี ชุดคอสเพลย์ ชุดลีดเดอร์ ชุดนานาชาติ ชุด AEC ชุดแดนซ์เซอร์ ชุดนักร้อง ชุดราตรี ชุดย้อนยุค ชุดเจ้าหญิง ชุดเจ้าชาย ชุดการแสดง ฯลฯ",
      type: "website",
      url: "https://baronesscostume.com/category/" + params.categoryId,
      images: "/baroness-costume.png",
    },
  };
}

export const runtime = "edge";
