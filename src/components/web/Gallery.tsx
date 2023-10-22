"use client";

import { R2 } from "@/lib/r2";
import {
  ListObjectsV2Command,
  ListObjectsCommandOutput,
} from "@aws-sdk/client-s3";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import FullScreenImage from "./FullScreenImage";

export type ObjectType = {
  Key: string;
  LastModified: Date;
  ETag: string;
};

function Gallery({ categoryId }: { categoryId: string }) {
  const [data, setData] = useState<undefined | ObjectType[]>(undefined);
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState<number>(0);

  useEffect(() => {
    setLoading(true);
    R2.send(
      new ListObjectsV2Command({
        Bucket: "baronesscostume",
        Prefix: categoryId + `.thumbnail`,
      })
    )
      .then((res: ListObjectsCommandOutput) =>
        setData((res.Contents as any) || [])
      )
      .finally(() => setLoading(false));
  }, [categoryId]);
  return (
    <>
      {!loading && (
        <div
          className={
            "grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5"
          }
        >
          {data &&
            data.map((item: ObjectType, index: number) => (
              <button
                key={item.Key}
                onClick={() =>
                  handleOpenFullImage(index, setCurrentItem, setIsOpen)
                }
                className={
                  "flex items-center justify-center rounded-lg p-2 bg-[#CCCCCC]/20 hover:bg-gold/20 transition-all object-contain outline-none"
                }
              >
                <img
                  src={process.env.NEXT_PUBLIC_ASSETS_URL + "/" + item.Key}
                  alt={item.Key}
                  className={"object-contain w-full max-h-[300px] rounded-lg"}
                />
              </button>
            ))}
        </div>
      )}
      {data && isOpen && (
        <FullScreenImage
          data={data}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          currentItem={currentItem}
          setCurrentItem={setCurrentItem}
        />
      )}
    </>
  );
}

export default Gallery;

function handleOpenFullImage(
  index: number,
  setter: Dispatch<SetStateAction<number>>,
  open: Dispatch<SetStateAction<boolean>>
) {
  setter(index);
  open(true);
}
