"use client";

import { R2 } from "@/lib/r2";
import {
  PutObjectAclCommandOutput,
  PutObjectCommand,
} from "@aws-sdk/client-s3";
import Image from "next/image";
import { Dispatch, useRef, useState } from "react";

type UploadFileSettingType = {
  Bucket: string;
  Key: string;
  Body: File;
  ContentType: string;
};

type TrackingType = {
  id: string;
  file: string;
  status: "uploading" | "success" | "fail";
};

type TrackingObjectType = {
  [key: string]: TrackingType;
};

function UploadFile() {
  const files = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<any>();
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [trackingFileStatus, setTrackingFileStatus] =
    useState<TrackingObjectType>({});
  const BUCKET = "baronesscostume";
  const PREFIX = "s1.s2.";

  async function handleFileUpload(
    item: UploadFileSettingType,
    fileObject: TrackingObjectType,
    setFileObject: Dispatch<TrackingObjectType>
  ): Promise<PutObjectAclCommandOutput | unknown> {
    const command = new PutObjectCommand(item);
    const id = item.Key;
    const trackingObject = { ...fileObject };
    try {
      const response = await R2.send(command);
      if (response.$metadata.httpStatusCode === 200) {
        trackingObject[id].status = "success";
        setFileObject(trackingObject);
      } else {
        trackingObject[id].status = "fail";
        setFileObject(trackingObject);
      }
      return response;
    } catch (err) {
      return err;
    }
  }

  function handleFileChange() {
    const fileArr = Array.from(files.current?.files || []);
    let i = -1;

    const uploadFileSetting = fileArr.map((file: File) => {
      i++;
      var name = new Date().getTime() + i;
      return {
        Bucket: BUCKET,
        Key: `${PREFIX}${name}`,
        Body: file,
        ContentType: file.type,
      };
    }) as UploadFileSettingType[];

    const trackingArray = uploadFileSetting.map(
      (item: UploadFileSettingType) => {
        return {
          id: item.Key,
          file: URL.createObjectURL(item.Body),
          status: "uploading",
        };
      }
    ) as TrackingType[];

    const trackingObject = trackingArray.reduce((acc, item) => {
      acc[item.id] = item;
      return acc;
    }, {} as TrackingObjectType);
    setTrackingFileStatus(trackingObject);

    const uploadFilePromise = uploadFileSetting.map(
      (item: UploadFileSettingType) => {
        return () =>
          handleFileUpload(item, trackingFileStatus, setTrackingFileStatus);
      }
    );
    setSelectedFile(uploadFilePromise);
  }

  async function handleUpload() {
    setIsUploading(true);
    const response = await Promise.allSettled(
      selectedFile.map((fn: any) => fn())
    );
    console.log("response", response);
    setIsUploading(false);
  }

  return (
    <div>
      <p>upload</p>
      <input
        type="file"
        multiple
        ref={files}
        onChange={() => handleFileChange()}
      />
      <p>⬆️ Uploading File</p>

      {Object.entries(trackingFileStatus || {}).map(([key, value]) => (
        <div key={key} style={{ display: "inline-block" }}>
          <div
            style={{
              width: "200px",
              height: "200px",
              display: "block",
              position: "relative",
            }}
          >
            <Image src={value.file} alt={value.id} fill objectFit="contain" />
          </div>
          <div>{value.status}</div>
          {/* {isUploading == false && value.status == "uploading"
            ? "pending"
            : value.status} */}
        </div>
      ))}

      {/* Handling File Upload Status */}
      {/* Handling File Upload Status */}
      {/* Handling File Upload Status */}
      {/* Handling File Upload Status */}
      {/* Handling File Upload Status */}

      {/* <ul>
        {selectedFile?.map((file: any, index: number) => (
          <li key={file.Key}>{file.Key}</li>
        ))}
      </ul> */}
      <div>
        <button onClick={() => handleUpload()}>Upload</button>
      </div>
    </div>
  );
}

export default UploadFile;
