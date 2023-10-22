"use client";

import { R2 } from "@/lib/r2";
import {
  ListObjectsV2Command,
  ListObjectsCommandOutput,
} from "@aws-sdk/client-s3";
import { useEffect, useState } from "react";
import GalleryItem from "./GalleryItem";
import Loading from "./Loading";
import { CiImageOff } from "react-icons/ci";

export type ObjectType = {
  Key: string;
  LastModified: Date;
  ETag: string;
};

function Gallery({ categoryId }: { categoryId: string }) {
  const [data, setData] = useState<undefined | ObjectType[]>(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    R2.send(
      new ListObjectsV2Command({
        Bucket: "baronesscostume",
        Prefix: categoryId + `.thumbnail`,
      })
    )
      .then((res: ListObjectsCommandOutput) => {
        setData((res.Contents as any) || []);
      })
      .finally(() => setLoading(false));
  }, [categoryId]);

  if (loading) return <Loading />;
  if (!loading && data && data.length > 0) return <GalleryItem data={data} />;
  if (!loading && data && data.length == 0)
    return (
      <div className="flex min-h-[400px] justify-center items-center">
        <div className="pb-40 text-[20px] text-center text-gold">
          <div className="bg-gold/10 p-5 rounded-lg">
            <div className="inline-block">
              <CiImageOff className="text-[50px]" />
            </div>
            <div>ไม่พบรูปภาพ</div>
          </div>
        </div>
      </div>
    );
}

export default Gallery;
