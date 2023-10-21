import { linkList } from "@/data/linklist";
import Link from "next/link";

function Location() {
  return (
    <div className="bg-bglight pt-12 pb-16 lg:pb-32">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-bold text-green text-[30px] mb-7">
          ที่ตั้งห้องเสื้อและที่จอดรถ
        </h2>
        <div>
          <div className="text-[18px] lg:text-[20px] text-green mb-10 max-w-[580px] mx-auto">
            ห้องเสื้อ บารอนเนส 111/105 ปากซอยโพธิ์แก้ว 19 (ลาดพร้าว 101){" "}
            <br className="hidden md:block" />
            แขวงนวมินทร์ เขตบึงกุ่ม กทม 10240
          </div>
          <div className="mb-14">
            <Link
              href={linkList.map}
              target="_blank"
              className="border-2 border-green px-3 py-3 font-bold text-green rounded-xl hover:bg-green/10 transition-all"
            >
              ดูแผนที่ Google Map
            </Link>
          </div>
          <div className="max-w-[900px] mx-auto mb-3">
            <img
              src="/location/map.png"
              alt="location"
              className="mx-auto rounded-xl shadow-sm"
            />
          </div>
          <div className="md:flex gap-3 max-w-[900px] mx-auto  mb-3">
            <div>
              <img
                src="/location/parking-1.png"
                alt=""
                className="w-full rounded-xl mb-3 shadow-sm"
              />
            </div>
            <div>
              <img
                src="/location/parking-2.png"
                alt=""
                className="w-full rounded-xl  mb-3 shadow-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Location;
