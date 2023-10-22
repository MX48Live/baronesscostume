import { AiOutlineCloseSquare } from "react-icons/ai";
import { useModalStore } from "@/store/Modal";
import { useEffect } from "react";
import { category } from "@/data/category";
import Link from "next/link";

function CategoryModal() {
  const isModalOpen = useModalStore((state) => state.isOpen);
  const setModalClose = useModalStore((state) => state.setClose);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (isModalOpen) {
        document.body.style.overflow = "hidden";
      }
    }
  }, [isModalOpen]);

  function handleCloseModal() {
    setModalClose();
    document.body.style.overflow = "unset";
  }

  return (
    <div>
      {isModalOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-green/60 flex">
          <div className="w-full text-center p-5 overflow-y-auto">
            <div className=" bg-white max-w-[980px] w-full rounded-lg mx-auto">
              <div className="py-4 px-6 border-b border-b-lightgreen/20 flex justify-between items-center">
                <div className="text-[26px] font-bold text-green">
                  หมวดหมู่ชุดทั้งหมด
                </div>
                <button
                  className="text-[30px] text-green hover:text-gold p-1"
                  onClick={handleCloseModal}
                >
                  <AiOutlineCloseSquare />
                </button>
              </div>
              <div className="py-4 px-6 text-left pb-20">
                {category.map((cate) => (
                  <div key={cate.id} className="pb-3">
                    <Link
                      href={"/category/" + cate.id}
                      onClick={handleCloseModal}
                      className="text-[18px] lg:text-[22px] font-bold text-green inline-block border border-green px-3 py-2 rounded-lg hover:bg-green hover:text-white"
                    >
                      {cate.name}
                    </Link>
                    {cate.sub && (
                      <div className="flex flex-wrap gap-2 text-[15px] lg:text-[18px] mt-3 mb-3">
                        {cate.sub.map((sub) => (
                          <Link
                            href={"/category/" + cate.id + "." + sub.id}
                            onClick={handleCloseModal}
                            key={sub.id}
                            className="text-green inline-block border border-green px-2 py-1 rounded-lg hover:bg-green hover:text-white"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CategoryModal;
