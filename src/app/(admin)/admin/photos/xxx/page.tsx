import { category } from "@/data/category";
import CategoryList from "@/components/admin/CategoryList";
import ImageList from "@/components/photos/ImageList";
import { LiaMehSolid } from "react-icons/lia";
import { R2 } from "@/lib/r2";
import { ListObjectsV2Command } from "@aws-sdk/client-s3";

async function PhotoList({ params }: { params: { categoryId: string } }) {
  const { categoryId: currentId } = params;
  const imageList = await R2.send(
    new ListObjectsV2Command({
      Bucket: "baronesscostume",
      Prefix: params.categoryId + `.thumbnail`,
    })
  );

  return (
    <div className="grid grid-cols-[200px,1fr]">
      <div className="p-2 overflow-y-scroll h-screen pb-10">
        <CategoryList category={category} categoryId={currentId} />
      </div>
      <div className="flex gap-2 flex-wrap">
        {!imageList.Contents && (
          <div className="flex justify-center align-middle items-center w-full">
            <div className="text-[30px] text-[#666] flex flex-col items-center">
              <LiaMehSolid className="text-[50px]" />
              <div>ไม่พบข้อมูล</div>
            </div>
          </div>
        )}
        {imageList.Contents && imageList.Contents.length > 0 && (
          <ImageList imageList={imageList} />
        )}
      </div>
    </div>
  );
}

export default PhotoList;
