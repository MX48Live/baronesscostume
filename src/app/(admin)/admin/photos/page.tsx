"use client";
import { CategoryType, category } from "@/data/category";
import CategoryList from "@/components/admin/CategoryList";
import { PiArrowFatLeftFill } from "react-icons/pi";
import { useEffect, useState } from "react";
import { LiaMehSolid } from "react-icons/lia";
import { R2 } from "@/lib/r2";
import { ListObjectsV2Command } from "@aws-sdk/client-s3";
import { ImSpinner5 } from "react-icons/im";

function handleCategoryID(category: CategoryType, id: string | undefined) {
  if (id == undefined) return undefined;
  const cateArr = id.split(".");
  if (cateArr.length == 1) return category.filter((cate) => cate.id == id);

  const sub_cate = category.filter((cate) => cate.id == cateArr[0])[0].sub;
  return sub_cate!.filter((sub) => sub.id == cateArr[1]);
}

function Photos() {
  const [currentId, setCurrentId] = useState<string | undefined>(undefined);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    if (currentId == undefined) return;
    setLoading(true);
    R2.send(
      new ListObjectsV2Command({
        Bucket: "baronesscostume",
        Prefix: currentId + `.thumbnail`,
      })
    ).then((res) => {
      setData(res.Contents ?? []);
      setLoading(false);
    });
  }, [currentId]);

  const currentCategory = handleCategoryID(category, currentId);
  console.log("currentCategory", currentCategory);

  return (
    <div className="grid grid-cols-[200px,1fr]">
      <div className="p-2 overflow-y-scroll h-screen pb-10">
        <CategoryList
          category={category}
          categoryId={currentId}
          setCurrentId={setCurrentId}
        />
      </div>
      {loading && (
        <div className="flex w-full items-center justify-center">
          <div className="pb-10 flex flex-col items-center">
            <ImSpinner5 className="text-[50px] animate-spin" />
            <div className="mt-2">Loading...</div>
          </div>
        </div>
      )}
      {!loading && currentId == undefined && (
        <div className="flex w-full items-center justify-center">
          <div className="text-[#CCC] font-bold text-[30px] pb-20 flex gap-2 items-center">
            <PiArrowFatLeftFill /> <span>กรุณาเลือกประเภท</span>
          </div>
        </div>
      )}
      {!loading && currentCategory == undefined && (
        <div className="flex justify-center align-middle items-center w-full">
          <div className="text-[30px] text-[#666] flex flex-col items-center mb-20">
            <LiaMehSolid className="text-[50px]" />
            <div>ไม่พบข้อมูล</div>
          </div>
        </div>
      )}
      {!loading && currentCategory != undefined && (
        <div>
          <div className="shadow-md flex justify-between items-center px-4 py-3">
            <div className="text-[20px] font-bold text-green">
              {currentCategory[0].name}
            </div>
            <div>
              <button className="bg-green/90 text-light rounded-md py-2 px-4 hover:bg-green">
                Upload
              </button>
            </div>
          </div>
          <div>
            {/* <div className="flex justify-center align-middle items-center w-full">
            <div className="text-[30px] text-[#666] flex flex-col items-center mb-20">
              <div>ไม่พบข้อมูล</div>
            </div>
          </div> */}
          </div>
        </div>
      )}
    </div>
  );
}

export default Photos;
