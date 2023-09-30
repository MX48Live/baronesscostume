"use client";

import { handleResizeFile } from "@/helper/handleResizeFile";
import { renameFile } from "@/helper/renameFile";
import { useRef, useState } from "react";
import File from "./File";

function UploadFile() {
  const files = useRef<HTMLInputElement>(null);
  const BUCKET = "baronesscostume";
  const PREFIX = "C1.S1.";
  const [fullSizeFileList, setFullSizeFileList] = useState<File[]>([]);
  const [startUpload, setStartUpload] = useState<boolean>(false);

  async function handleSelectImage() {
    const rawFileArr = Array.from(files.current?.files || []);
    const fullSizeRenamed = await renameFile(rawFileArr, PREFIX);

    setFullSizeFileList((prev: File[]) => {
      return [...prev, ...fullSizeRenamed];
    });
  }

  return (
    <div>
      <p>upload</p>
      <input
        type="file"
        multiple
        accept="image/*"
        ref={files}
        onChange={() => handleSelectImage()}
      />

      <p>⬆️ Uploading File</p>
      {fullSizeFileList.length > 0 && (
        <div>
          {fullSizeFileList.map((item: File, index: number) => (
            <File
              key={index}
              image={item}
              bucket={BUCKET}
              startUpload={startUpload}
            />
          ))}
        </div>
      )}

      <div>
        <button onClick={() => setStartUpload(true)}>Upload</button>
      </div>
    </div>
  );
}

export default UploadFile;
