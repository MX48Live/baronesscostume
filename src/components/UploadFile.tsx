"use client";

import { R2 } from "@/lib/r2";
import { PutBucketCorsCommand, PutObjectCommand } from "@aws-sdk/client-s3";
import { useRef, useState } from "react";

function UploadFile() {
  const files = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<any>();
  const BUCKET = "baronesscostume";

  const handleFileChange = () => {
    const fileArr = Array.from(files.current?.files || []);

    const uploadLists = fileArr.map((file: File) => {
      return {
        Bucket: BUCKET,
        Key: file.name,
        Body: file,
        ContentType: file.type,
      };
    });
    setSelectedFile(uploadLists);
  };

  const handleUpload = async () => {
    const bucketParams = {
      Bucket: BUCKET,
      Key: selectedFile.name,
      Body: selectedFile,
      ContentType: selectedFile.type,
    };
    const command = new PutObjectCommand(bucketParams);
    try {
      const response = await R2.send(command);
      console.log("Success uploading file: ", response);
    } catch (err) {
      console.error("Error uploading file: ", err);
    }
  };

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
      <ul>
        {selectedFile?.map((file: any, index: number) => (
          <li key={file.Key}>{file.Key}</li>
        ))}
      </ul>
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}

export default UploadFile;
