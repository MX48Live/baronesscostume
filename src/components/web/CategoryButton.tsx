"use client";

import { useModalStore } from "@/store/Modal";

function CategoryButton({ className = "" }: { className?: string }) {
  const setModalOpen = useModalStore((state) => state.setOpen);

  return (
    <button className={className} onClick={setModalOpen}>
      หมวดหมู่ชุด
    </button>
  );
}

export default CategoryButton;
