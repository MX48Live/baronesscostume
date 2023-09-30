"use client";
import { createUploadFileSetting } from "@/helper/createUploadFileSetting";
import { handleResizeFile } from "@/helper/handleResizeFile";
import { renameThumbnailFile } from "@/helper/renameFile";
import Image from "next/image";
import { Dispatch, useEffect, useState } from "react";
import { UploadFileSettingType } from "./UploadFileType";
import {
  PutObjectAclCommandOutput,
  PutObjectCommand,
} from "@aws-sdk/client-s3";
import { R2 } from "@/lib/r2";

async function Initializing(fullSizeRenamed: File[], BUCKET: string) {
  const fullSizeResized = await handleResizeFile(fullSizeRenamed, "full");
  const thumbnailResized = await handleResizeFile(fullSizeResized, "thumbnail");
  const thumbnailRenamed = await renameThumbnailFile(thumbnailResized);

  const fullSizeUploadSetting = createUploadFileSetting(
    fullSizeResized,
    BUCKET
  ) as UploadFileSettingType[];
  const thumbnailUploadSetting = createUploadFileSetting(
    thumbnailRenamed,
    BUCKET
  ) as UploadFileSettingType[];

  return [fullSizeUploadSetting[0], thumbnailUploadSetting[0]];
}

function handleStatus(
  response: PromiseSettledResult<PutObjectAclCommandOutput | unknown>[],
  dispatch: Dispatch<"pending" | "uploading" | "success" | "fail">
) {
  if (response) {
    if (
      response[0].status === "fulfilled" &&
      response[1].status === "fulfilled"
    ) {
      dispatch("success");
    }
  }
}

async function handleFileUpload(
  item: UploadFileSettingType[]
): Promise<PutObjectAclCommandOutput | unknown> {
  const full = new PutObjectCommand(item[0]);
  const thumbnail = new PutObjectCommand(item[1]);
  try {
    const response = await Promise.allSettled([
      R2.send(full),
      R2.send(thumbnail),
    ]);
    return response;
  } catch (err) {
    return err;
  }
}

function File({
  image,
  bucket,
  startUpload,
}: {
  image: File;
  bucket: string;
  startUpload: boolean;
}) {
  const [initial, setInitial] = useState(true);
  const [imageItems, setImageItems] = useState<UploadFileSettingType[]>([]);
  const [status, setStatus] = useState<
    "pending" | "uploading" | "success" | "fail"
  >("pending");

  useEffect(() => {
    if (initial) {
      Initializing([image], bucket).then(
        (response: UploadFileSettingType[]) => {
          setImageItems(response);
          setInitial(false);
        }
      );
    }
    if (startUpload) {
      handleFileUpload(imageItems).then((response: any) => {
        setStatus("uploading");
        handleStatus(response, setStatus);
      });
    }
  }, [startUpload, imageItems, initial, image, bucket]);

  return (
    <div style={{ display: "inline-block" }}>
      <div
        style={{
          width: "200px",
          height: "200px",
          display: "block",
          position: "relative",
        }}
      >
        {initial && <div>Loading...</div>}
        {!initial && (
          <>
            <Image
              src={URL.createObjectURL(imageItems[1].Body)}
              alt={imageItems[0].Key}
              fill={true}
              style={{ objectFit: "contain", position: "absolute" }}
            />
          </>
        )}
      </div>
      {!initial && (
        <>
          <div>{status}</div>
        </>
      )}
      <br />
    </div>
  );
}

export default File;
