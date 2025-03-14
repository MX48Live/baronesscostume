import { cn } from "@/helper/cn";
import { RW2 } from "@/lib/r2";
import { DeleteObjectCommand } from "@aws-sdk/client-s3";

import { useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { FaSpinner } from "react-icons/fa";

function handleShowName(id: string | undefined) {
  if (id == undefined) return undefined;
  const cateArr = id.split(".");
  if (cateArr.length == 4) {
    return cateArr[2];
  }
  if (cateArr.length == 5) {
    return cateArr[3];
  }
  if (cateArr.length == 6) {
    return cateArr[4];
  }
  return id;
}

export default function ImagesWithName({ item }: { item: { Key: string } }) {
  const [loading, setLoading] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);

  async function deleteImage(key: string) {
    const thumbnailImage = key.replace(".thumbnail", "");
    const fullImage = key;
    var answer = window.confirm("ลบรูปนี้ใช่ไหม ?");
    if (answer == false) return;
    setLoading(true);
    await handleDeleteImage(thumbnailImage, fullImage);
  }

  async function handleDeleteImage(thumbnailImage: string, fullImage: string) {
    const BUCKET = "baronesscostume";
    const full = new DeleteObjectCommand({ Bucket: BUCKET, Key: fullImage });
    const thumbnail = new DeleteObjectCommand({
      Bucket: BUCKET,
      Key: thumbnailImage,
    });
    try {
      const response = await Promise.allSettled([
        RW2.send(full),
        RW2.send(thumbnail),
      ]);
      response.forEach((res) => {
        if (res.status != "fulfilled") {
          alert("ผิดพลาดในการลบรูปภาพนี้ กรุณาลองอีกครั้ง หรือ ติดต่อผู้ดูแล");
          setLoading(false);
          return;
        }
      });
      setIsDeleted(true);
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  }

  return (
    <div>
      <div className="group relative flex items-center justify-center w-[120px] h-[120px] shadow-sm hover:shadow-md transition-shadow border-4 border-[#fff] mb-1">
        <img
          src={`${process.env.NEXT_PUBLIC_ASSETS_URL}/${item.Key}`}
          className="max-w-full max-h-full object-cover"
          alt=""
        />
        <div
          className={cn(
            `absolute top-0 left-0 right-0 bottom-0 bg-green/50 hidden items-center justify-center text-white group-hover:flex`,
            loading ? "flex " : "hidden",
            isDeleted ? "flex bg-lightgold/60" : "hidden"
          )}
        >
          {" "}
          {loading && <FaSpinner className="animate-spin" />}
          {isDeleted && !loading && <IoMdClose className="text-6xl" />}
          {!isDeleted && !loading && (
            <button
              className="bg-red-500 text-white rounded-full"
              onClick={() => deleteImage(item.Key)}
            >
              <FaRegTrashAlt />
            </button>
          )}
        </div>
      </div>
      <div className="line-clamp-1 text-[12px] text-center w-[120px]">
        {handleShowName(item.Key)}
      </div>
    </div>
  );
}
