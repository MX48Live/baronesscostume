import { Dispatch, SetStateAction, useState } from "react";
import { ObjectType } from "@/components/web/Gallery";

function FullScreenImage({ data }: { data: ObjectType[] }) {
  const [currentItem, setCurrentItem] = useState<number>(0);
  return (
    <>
      <div>{JSON.stringify(data)}</div>
      {data && (
        <div>
          <button
            onClick={() => handlePrev(data.length, currentItem, setCurrentItem)}
          >
            Prev
          </button>
          <button
            onClick={() => handleNext(data.length, currentItem, setCurrentItem)}
          >
            Next
          </button>
          <img
            alt={""}
            src={
              process.env.NEXT_PUBLIC_ASSETS_URL +
              "/" +
              handleFileName(data[currentItem].Key)
            }
          />
        </div>
      )}
    </>
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
  length: number,
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
