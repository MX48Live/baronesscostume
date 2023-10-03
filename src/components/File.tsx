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
  file,
  bucket,
  startUpload,
  fileIndex,
  currentProcessPointer,
  setCurrentProcessPointer,
  currentUploadPointer,
  setCurrentUploadPointer,
}: {
  file: File;
  bucket: string;
  startUpload: boolean;
  fileIndex: number;
  currentProcessPointer: number;
  setCurrentProcessPointer: Dispatch<React.SetStateAction<number>>;
  currentUploadPointer: number;
  setCurrentUploadPointer: Dispatch<React.SetStateAction<number>>;
}) {
  const [initial, setInitial] = useState(true);
  const [imageItems, setImageItems] = useState<UploadFileSettingType[]>([]);
  const [status, setStatus] = useState<
    "pending" | "uploading" | "success" | "fail"
  >("pending");

  useEffect(() => {
    if (fileIndex == currentProcessPointer) {
      if (initial) {
        Initializing([file], bucket).then(
          (response: UploadFileSettingType[]) => {
            setImageItems(response);
            setInitial(false);
          }
        );
        setCurrentProcessPointer((prev) => prev + 1);
      }
    }

    if (!initial) {
      if (startUpload && fileIndex == currentUploadPointer) {
        handleFileUpload(imageItems).then((response: any) => {
          setStatus("uploading");
          handleStatus(response, setStatus);
          setCurrentUploadPointer((prev) => prev + 1);
        });
      }
    }
  }, [
    startUpload,
    imageItems,
    initial,
    file,
    bucket,
    currentProcessPointer,
    fileIndex,
    setCurrentProcessPointer,
    currentUploadPointer,
    setCurrentUploadPointer,
  ]);

  return (
    <div className="text-center">
      <div className="relative flex items-center justify-center w-[120px] h-[120px] shadow-sm hover:shadow-md transition-shadow border-4 border-[#fff] mb-1">
        {initial && (
          <div>
            <img src="/loading.gif" alt="Loading..." className="w-[20px]" />
          </div>
        )}
        {!initial && (
          <img
            src={URL.createObjectURL(imageItems[1].Body)}
            alt={imageItems[0].Key}
            className="max-w-full max-h-full object-cover"
          />
        )}
      </div>
      <div>
        {initial && (
          <div className="text-[10px] mt-2">
            <img
              src="/loading.gif"
              alt="loading"
              className="inline-block w-[10px]"
            />{" "}
            Queuing
          </div>
        )}
        {!initial && (
          <>
            {status == "pending" && (
              <div className="text-[10px] mt-2">PENDING</div>
            )}
            {status == "uploading" && (
              <div className="text-[10px] mt-2">
                <img
                  src="/loading.gif"
                  alt="loading"
                  className="inline-block w-[10px]"
                />{" "}
                Uploading
              </div>
            )}
            {status == "success" && (
              <div className="text-[10px] mt-2 text-[green]">✅ Success</div>
            )}
            {status == "fail" && (
              <div className="text-[10px] mt-2 text-[red]">❌ Failed</div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default File;
