import { R2 } from "@/lib/r2";
import { ListObjectsV2Command } from "@aws-sdk/client-s3";
import Image from "next/image";
import React from "react";
import { category } from "@/data/category";
import CategoryList from "@/components/admin/CategoryList";

async function Photos({ params }: { params: { categoryId: string } }) {
  const { categoryId } = params;

  const imageList = await R2.send(
    new ListObjectsV2Command({
      Bucket: "baronesscostume",
      Prefix: categoryId + `.thumbnail`,
    })
  );

  return (
    <div>
      <div className="">
        <div className="grid grid-cols-[200px,1fr]">
          <div className="p-2 overflow-y-scroll h-screen pb-10">
            <CategoryList category={category} categoryId={categoryId} />
          </div>
          <div>
            {imageList.Contents && imageList.Contents.length > 0 && (
              <div className="flex gap-2 flex-wrap">
                {imageList.Contents.map((item) => (
                  <div
                    key={item.Key}
                    className="shadow-sm hover:shadow-md border-white border-4 transition-all"
                    style={{
                      width: "120px",
                      height: "120px",
                      display: "block",
                      position: "relative",
                    }}
                  >
                    <Image
                      src={process.env.NEXT_PUBLIC_ASSETS_URL + "/" + item.Key}
                      alt={item.Key || ""}
                      fill={true}
                      sizes="120px"
                      priority={true}
                      style={{ objectFit: "contain", position: "absolute" }}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Photos;
