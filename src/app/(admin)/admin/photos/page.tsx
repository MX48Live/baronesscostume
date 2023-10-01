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
  if (cateArr.length == 2) {
    const cate = category.filter((cate) => cate.id == cateArr[0])[0];
    if (cate == undefined) return undefined;
    if (cate.sub == undefined) return undefined;

    const cateWithSub = cate.sub.filter((sub) => sub.id == cateArr[1])[0];
    return cateWithSub;
  }
  return undefined;
}

function Photos() {
  const [currentId, setCurrentId] = useState<string | undefined>(undefined);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any[]>([]);
  const [uploadMode, setUploadMode] = useState<boolean>(false);
  const [cateData, setCateData] = useState<any>(undefined);

  useEffect(() => {
    if (currentId == undefined) return;
    const currentCategory = handleCategoryID(category, currentId);
    setLoading(true);
    R2.send(
      new ListObjectsV2Command({
        Bucket: "baronesscostume",
        Prefix: currentId + `.thumbnail`,
      })
    ).then((res) => {
      setData(res.Contents ?? []);
      setCateData(currentCategory);
      setLoading(false);
    });
  }, [currentId]);

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
      {!loading && cateData == undefined && (
        <div className="flex justify-center align-middle items-center w-full">
          <div className="text-[30px] text-[#666] flex flex-col items-center mb-20">
            <LiaMehSolid className="text-[50px]" />
            <div>ไม่พบข้อมูล</div>
          </div>
        </div>
      )}
      {!loading && cateData != undefined && (
        <div>
          <div className="shadow-md md:flex justify-between items-center px-4 py-3 md:h-[60px]">
            <div className="text-[20px] font-bold text-green mb-2 md:mb-0">
              {cateData.name}
            </div>
            <div>
              {!uploadMode && (
                <button
                  onClick={() => setUploadMode(true)}
                  className="bg-green/90 text-light rounded-md py-2 px-4 hover:bg-green text-sm font-bold"
                >
                  Upload
                </button>
              )}
              {uploadMode && (
                <button
                  onClick={() => setUploadMode(false)}
                  className=" text-green rounded-md py-2 px-4 hover:bg-green/40 text-sm font-bold border border-green/30"
                >
                  Cancel Upload
                </button>
              )}
            </div>
          </div>
          {!uploadMode && (
            <div className="p-4">
              {data.length == 0 && (
                <div className=" text-gold text-center mt-20">
                  <div className="mb-3 font-bold">ยังไม่มีรูปในหมวดหมู่นี้</div>

                  <button
                    onClick={() => setUploadMode(true)}
                    className="bg-green/90 text-light rounded-md py-2 px-4 hover:bg-green text-sm font-bold"
                  >
                    Upload
                  </button>
                </div>
              )}
              {data.length > 0 && (
                <div className="flex justify-center align-middle items-center w-full">
                  <div className="text-[30px] text-[#666] flex flex-col items-center mb-20">
                    <div>data</div>
                  </div>
                </div>
              )}
            </div>
          )}
          {uploadMode && (
            <div className="p-4">
              <div>Uploading</div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Photos;
