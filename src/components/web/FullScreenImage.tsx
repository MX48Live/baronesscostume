import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { ObjectType } from "@/components/web/Gallery";
import {
  BsCaretLeftSquareFill,
  BsFillCaretRightSquareFill,
} from "react-icons/bs";
import { AiFillCloseSquare } from "react-icons/ai";
import clsx from "clsx";
import Link from "next/link";
import { linkList } from "@/data/linklist";

function FullScreenImage({
  data,
  isOpen,
  setIsOpen,
  currentItem,
  setCurrentItem,
}: {
  data: ObjectType[];
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  currentItem: number;
  setCurrentItem: Dispatch<SetStateAction<number>>;
}) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        handleNext(data.length, currentItem, setCurrentItem);
      } else if (event.key === "ArrowLeft") {
        handlePrev(currentItem, setCurrentItem);
      } else if (event.key === "Escape") {
        handleCloseModal(setIsOpen);
      }
    };

    if (typeof window !== "undefined") {
      if (true) {
        document.body.style.overflow = "hidden";
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentItem, data.length, setCurrentItem]);

  return (
    <div
      className={clsx(
        "fixed top-0 left-0 right-0 bottom-0 bg-green/60 flex overflow-auto"
      )}
    >
      <div className={"fixed top-4 right-0 md:right-4"}>
        <button
          onClick={() => handleCloseModal(setIsOpen)}
          className={clsx(
            "text-[40px] lg:text-[50px] text-link opacity-70 hover:opacity-100 p-4 z-[999] outline-none"
          )}
        >
          <AiFillCloseSquare />
        </button>
      </div>
      <div className={"fixed top-[50%] translate-y-[-50%] left-4"}>
        <button
          onClick={() => handlePrev(currentItem, setCurrentItem)}
          className={clsx(
            "text-[40px] lg:text-[50px] text-link opacity-70 hover:opacity-100 p-4 z-[999] outline-none",
            currentItem == 0 && "hidden"
          )}
        >
          <BsCaretLeftSquareFill />
        </button>
      </div>
      <div className={"fixed top-[50%] translate-y-[-50%] right-4"}>
        <button
          onClick={() => handleNext(data.length, currentItem, setCurrentItem)}
          className={clsx(
            "text-[40px] lg:text-[50px] text-link opacity-70 hover:opacity-100 p-4 z-[999] outline-none",
            currentItem == data.length - 1 && "hidden"
          )}
        >
          <BsFillCaretRightSquareFill />
        </button>
      </div>
      <div className="flex p-5 justify-center w-full">
        <div className="flex">
          <img
            alt={""}
            className={"object-contain rounded-lg"}
            src={
              process.env.NEXT_PUBLIC_ASSETS_URL +
              "/" +
              handleFileName(data[currentItem].Key)
            }
          />
        </div>
      </div>
      <div className="fixed bottom-0 left-4 right-0">
        <div className="mb-8 bg-white/80 inline-block p-2 rounded-lg">
          <Link
            href={linkList.line}
            target="_blank"
            className="flex items-center justify-center gap-2"
          >
            <img
              src="/qr-code.png"
              alt="QR Code"
              className="inline-block h-[80px]"
            />
            <div className="mt-2 text-green">
              สอบถามข้อมูลเพิ่มเติม
              <br />
              แอดไลน์ @baroness101
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FullScreenImage;

function handleNext(
  length: number,
  currentItem: number,
  setCurrentItem: Dispatch<SetStateAction<number>>
) {
  if (currentItem < length - 1) {
    setCurrentItem((prev: number) => prev + 1);
  }
}

function handlePrev(
  currentItem: number,
  setCurrentItem: Dispatch<SetStateAction<number>>
) {
  if (currentItem > 0) {
    setCurrentItem((prev: number) => prev - 1);
  }
}

function handleFileName(fileName: string) {
  return fileName.replace(".thumbnail", "");
}

function handleCloseModal(setIsOpen: Dispatch<SetStateAction<boolean>>) {
  setIsOpen(false);
  document.body.style.overflow = "unset";
}

function fadeIn(cn: string) {
  setTimeout(() => {
    return cn;
  }, 100);
  return "";
}
