"use client";

import { ObjectType } from "@/components/web/Gallery";
import GalleryItem from "@/components/web/GalleryItem";
import Loading from "@/components/web/Loading";
import { useEffect, useState } from "react";
import { CiImageOff } from "react-icons/ci";

function FavoritePage() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<ObjectType[]>([]);

  function handleDeleteAll() {
    if (confirm("คุณต้องการลบรูปที่บันทึกไว้ทั้งหมดใช่ไหมไม่ ?") == true) {
      localStorage.removeItem("baroness_favorite");
      setData([]);
    }
  }

  useEffect(() => {
    const data = localStorage.getItem("baroness_favorite");
    if (data) {
      const parsedData = JSON.parse(data);
      const newData = parsedData.map((item: string) => {
        return {
          Key: item,
          LastModified: new Date(),
          ETag: "",
        };
      });
      setData(newData);
    }
    setIsLoading(false);
  }, []);

  return (
    <div className="bg-bglight bg-no-repeat bg-center">
      <div className="container mx-auto px-4 py-10 lg:py-20 text-center">
        <h1 className="text-[33px] font-bold text-green">รูปที่บันทึกไว้</h1>
      </div>
      {isLoading && <Loading />}
      {!isLoading && data && data.length == 0 && (
        <div className="flex min-h-[400px] justify-center items-center">
          <div className="pb-40 text-[20px] text-center text-gold">
            <div className="bg-gold/10 p-5 rounded-lg">
              <div className="inline-block">
                <CiImageOff className="text-[50px]" />
              </div>
              <div>ไม่มีรูปที่บันทึกไว้</div>
            </div>
          </div>
        </div>
      )}
      {!isLoading && data && data.length > 0 && (
        <div className={"bg-bglight p-5"}>
          <GalleryItem data={data} />
          <div className="pb-5 text-center">
            <button
              className="text-lg text-green/80 hover:text-green/100"
              onClick={() => handleDeleteAll()}
            >
              ลบทั้งหมด
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default FavoritePage;
