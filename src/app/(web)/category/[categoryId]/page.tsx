import CategoryHero from "@/components/web/CategoryHero";
import Gallery from "@/components/web/Gallery";
import Loading from "@/components/web/Loading";
import { CategoryItemType, category } from "@/data/category";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
import { Suspense } from "react";

export const runtime = "edge";

function CategoryPage({ params }: { params: { categoryId: string } }) {
  const categoryName = getCategoryName(
    params.categoryId.toUpperCase(),
    category
  );

  if (!categoryName) return notFound();
  const GalleryClientComponent = dynamic(
    () => import("../../../../components/web/Gallery"),
    { ssr: false }
  );

  return (
    <div>
      <CategoryHero categoryName={categoryName} />
      <div className={"bg-bglight p-5"}>
        <Suspense fallback={<Loading />}>
          <GalleryClientComponent
            categoryId={params.categoryId.toUpperCase()}
          />
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
  const cateArr = categoryId.toUpperCase().split(".");

  if (cateArr.length == 1) {
    return category.find((cate) => cate.id == categoryId.toUpperCase())?.name;
  }
  if (cateArr.length == 2) {
    const cate = category.find((cate) => cate.id == cateArr[0]);
    if (cate) {
      return cate.sub?.find((sub) => sub.id == cateArr[1])?.name;
    }
  }
  if (cateArr.length == 3) {
    const cate = category.find((cate) => cate.id == cateArr[0]);
    if (cate) {
      return cate.sub
        ?.find((sub) => sub.id == cateArr[1])
        ?.sub?.find((sub) => sub.id == cateArr[2])?.name;
    }
  }
}

export function generateMetadata({
  params,
}: {
  params: { categoryId: string };
}) {
  const categoryName = getCategoryName(
    params.categoryId.toUpperCase(),
    category
  );
  return {
    title: "Baroness Costume - " + categoryName,
    description:
      "บริการเช่าชุดหลากหลายประเภท ชุดไทย ชุดไทยร่วมสมัย ชุดไทยประยุกต์ ชุดแฟนซี ชุดคอสเพลย์ ชุดลีดเดอร์ ชุดนานาชาติ ชุด AEC ชุดแดนซ์เซอร์ ชุดนักร้อง ชุดราตรี ชุดย้อนยุค ชุดเจ้าหญิง ชุดเจ้าชาย ชุดการแสดง ฯลฯ",
    openGraph: {
      title: "Baroness Costume - " + categoryName,
      description:
        "บริการเช่าชุดหลากหลายประเภท ชุดไทย ชุดไทยร่วมสมัย ชุดไทยประยุกต์ ชุดแฟนซี ชุดคอสเพลย์ ชุดลีดเดอร์ ชุดนานาชาติ ชุด AEC ชุดแดนซ์เซอร์ ชุดนักร้อง ชุดราตรี ชุดย้อนยุค ชุดเจ้าหญิง ชุดเจ้าชาย ชุดการแสดง ฯลฯ",
      type: "website",
      url:
        "https://baronesscostume.com/category/" +
        params.categoryId.toUpperCase(),
      images: "/baroness-costume.png",
    },
  };
}

export async function generateStaticParams() {
  const arr: string[] = [];
  category.forEach((cate) => {
    if (cate.sub) {
      arr.push(cate.id);
      cate.sub.forEach((sub) => {
        arr.push(cate.id + "." + sub.id);
        if (sub.sub) {
          sub.sub.forEach((subsub) => {
            arr.push(cate.id + "." + sub.id + "." + subsub.id);
          });
        }
      });
    } else {
      arr.push(cate.id);
    }
  });
  return arr.map((id) => ({
    categoryId: id,
  }));
}
