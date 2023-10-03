"use client";

import { renameFile } from "@/helper/renameFile";
import { useEffect, useRef, useState } from "react";
import File from "./File";
import clsx from "clsx";
import { useRouter } from "next/navigation";

function UploadFile({
  currentId,
  startUpload,
  setStartUpload,
  setUploadMode,
  setTick,
}: {
  currentId: string | undefined;
  startUpload: boolean;
  setStartUpload: React.Dispatch<React.SetStateAction<boolean>>;
  setUploadMode: React.Dispatch<React.SetStateAction<boolean>>;
  setTick: React.Dispatch<React.SetStateAction<number>>;
}) {
  const files = useRef<HTMLInputElement>(null);
  const BUCKET = "baronesscostume";
  const PREFIX = currentId + ".";
  const rounter = useRouter();

  const [fullSizeFileList, setFullSizeFileList] = useState<File[]>([]);

  const [currentProcessPointer, setCurrentProcessPointer] = useState<number>(0);
  const [currentUploadPointer, setCurrentUploadPointer] = useState<number>(0);

  async function handleSelectImage() {
    const rawFileArr = Array.from(files.current?.files || []);
    const fullSizeRenamed = await renameFile(rawFileArr, PREFIX);
    setFullSizeFileList((prev: File[]) => [...prev, ...fullSizeRenamed]);
  }

  return (
    <div className="grid grid-rows-[1fr,auto]">
      <div>
        {fullSizeFileList.length > 0 && (
          <div className="flex gap-2 flex-wrap">
            {fullSizeFileList.map((file: File, index: number) => (
              <File
                key={index}
                file={file}
                bucket={BUCKET}
                startUpload={startUpload}
                fileIndex={index}
                currentProcessPointer={currentProcessPointer}
                setCurrentProcessPointer={setCurrentProcessPointer}
                currentUploadPointer={currentUploadPointer}
                setCurrentUploadPointer={setCurrentUploadPointer}
              />
            ))}
          </div>
        )}
      </div>
      <div className="bg-green z-50">
        <input
          type="file"
          multiple
          accept="image/*"
          ref={files}
          hidden
          onChange={() => handleSelectImage()}
        />
        <div className=" py-2 px-4 flex justify-between">
          <div>
            {!startUpload && (
              <button
                onClick={() => files.current?.click()}
                className="bg-gold rounded-md py-2 px-4 hover:bg-gold/80 text-sm font-bold hover:text-light"
              >
                Select File
              </button>
            )}
          </div>
          <div>
            {currentUploadPointer != fullSizeFileList.length && (
              <button
                onClick={() => setStartUpload(true)}
                className={clsx(
                  `bg-light rounded-md py-2 px-4 hover:bg-lightgreen text-sm font-bold hover:text-light`,
                  startUpload ? "pointer-events-none opacity-10" : ""
                )}
              >
                Start Upload
              </button>
            )}

            {currentUploadPointer == fullSizeFileList.length &&
              fullSizeFileList.length > 0 && (
                <button
                  className={`bg-light rounded-md py-2 px-8 hover:bg-lightgreen text-sm font-bold hover:text-light`}
                  onClick={() => {
                    setTick((prev) => prev + 1);
                    setStartUpload(false);
                    setUploadMode(false);
                  }}
                >
                  Close
                </button>
              )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UploadFile;
