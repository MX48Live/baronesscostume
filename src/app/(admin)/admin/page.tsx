import Navbar from "@/components/admin/Navbar";
import Link from "next/link";

function AdminAuthen() {
  return (
    <div>
      <Navbar />
      <div className="p-4">
        <div className="border-lightgreen border p-5 rounded-md inline-block max-w-[300px] w-full">
          <div className="text-[16px] font-bold mb-3">อัพโหลดรูปภาพ</div>
          <Link
            href="/admin/photos"
            className="bg-green text-light py-2 px-4 rounded-md inline-block"
          >
            อัพโหลดรูปภาพ
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AdminAuthen;
