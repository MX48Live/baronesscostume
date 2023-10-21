import Image from "next/image";
import Link from "next/link";
import CategoryButton from "./CategoryButton";
import { linkList } from "@/data/linklist";

function NotFoundHero() {
  return (
    <div
      className="bg-bglight bg-no-repeat bg-center"
      style={{
        backgroundImage: `url("/hero/hero-bg.svg")`,
      }}
    >
      <div className="container mx-auto px-4 py-10 lg:py-20 text-center">
        <Image
          width={230}
          height={120}
          src={`/full-main-logo.png`}
          alt="Baroness Costume"
          className="hidden lg:inline-block mb-5"
        />
        <h1 className="text-[33px] font-bold text-green my-20">
          ไม่พบหน้าที่คุณต้องการ
        </h1>
        <div className="gap-3 items-center justify-center flex mb-7">
          <Link
            href={linkList.home}
            className="border-2 border-green rounded-lg whitespace-nowrap font-bold px-3 py-2 flex gap-1 items-center hover:bg-green/10 text-green"
          >
            กลับหน้าหลัก
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFoundHero;
