import { Dispatch, SetStateAction, useEffect, useState } from "react";
import FullScreenImage from "./FullScreenImage";
import { ObjectType } from "./Gallery";
import Pagination from "./Pagination";
import FavoriteItem from "./FavoriteItem";

function handleOpenFullImage(
  index: number,
  setter: Dispatch<SetStateAction<number>>,
  open: Dispatch<SetStateAction<boolean>>
) {
  setter(index);
  open(true);
}

function GalleryItem({ data }: { data: ObjectType[] }) {
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [itemPerPage] = useState<number>(10);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [displayItems, setDisplayItems] = useState<ObjectType[] | undefined>(
    undefined
  );
  const [currentDisplayItems, setCurrentDisplayItems] = useState<number>(0);

  useEffect(() => {
    const start = currentPage * itemPerPage;
    const end = start + itemPerPage;
    const dataSlice = data.slice(start, end);
    setDisplayItems(dataSlice);
    setLoading(false);
  }, [currentPage, data, itemPerPage]);

  if (loading) return <div>Loading...</div>;
  if (!loading && displayItems)
    return (
      <div className="mb-24">
        <div
          className={
            "grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5 "
          }
        >
          {displayItems &&
            displayItems.map((item: ObjectType, index: number) => {
              return (
                <div
                  key={item.Key}
                  onClick={() =>
                    handleOpenFullImage(
                      index,
                      setCurrentDisplayItems,
                      setIsOpen
                    )
                  }
                  className={
                    "flex items-center justify-center rounded-lg p-2 bg-[#CCCCCC]/20 hover:bg-gold/20 transition-all object-contain outline-none relative cursor-pointer min-h-[300px] bg-center bg-no-repeat"
                  }
                  style={{
                    backgroundImage: "url(/lazy-image.png)",
                    backgroundSize: "150px",
                  }}
                >
                  <img
                    src={process.env.NEXT_PUBLIC_ASSETS_URL + "/" + item.Key}
                    alt={item.Key}
                    className={"object-contain w-full max-h-[300px] rounded-lg"}
                  />
                  {!isOpen && (
                    <div className="absolute top-2 right-2 text-[20px]">
                      <FavoriteItem keyItem={item.Key} />
                    </div>
                  )}
                </div>
              );
            })}
        </div>
        {data.length > itemPerPage && (
          <div className="flex justify-center mt-14">
            <Pagination
              count={data.length}
              itemPerPage={itemPerPage}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
        )}

        {displayItems && isOpen && (
          <FullScreenImage
            displayItems={displayItems}
            setIsOpen={setIsOpen}
            currentDisplayItems={currentDisplayItems}
            setCurrentDisplayItems={setCurrentDisplayItems}
          />
        )}
      </div>
    );
}

export default GalleryItem;
