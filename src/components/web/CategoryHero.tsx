import Image from "next/image";
import Link from "next/link";
import CategoryButton from "./CategoryButton";
import { linkList } from "@/data/linklist";

function CategoryHero({ categoryName }: { categoryName: string | undefined }) {
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
        <h1 className="text-[33px] font-bold text-green">
          บริการเช่า{categoryName}
        </h1>
        <p className="block max-w-[900px] mx-auto text-green py-6">
          Baroness Costume บริการเช่าชุดหลากหลายประเภท ชุดไทย ชุดไทยร่วมสมัย
          ชุดไทยประยุกต์ ชุดแฟนซี ชุดคอสเพลย์ ชุดลีดเดอร์ ชุดนานาชาติ ชุด AEC
          ชุดแดนซ์เซอร์ ชุดนักร้อง ชุดราตรี ชุดย้อนยุค ชุดเจ้าหญิง ชุดเจ้าชาย
          ชุดการแสดง ฯลฯ
        </p>
        <div className="gap-3 items-center justify-center hidden lg:flex mb-7">
          <Link
            href={linkList.tel}
            className="border-2 border-green rounded-lg whitespace-nowrap font-bold px-2 py-1.5 flex gap-1 items-center hover:bg-green/10 text-green"
          >
            <Image
              width={24}
              height={24}
              src={`/nav/icon-nav-call.png`}
              alt="Call"
            />
            092-461-6196
          </Link>
          <Link
            href={linkList.line}
            target="_blank"
            className="border-2 border-green rounded-lg whitespace-nowrap font-bold px-2 py-1.5 flex gap-1 items-center hover:bg-green/10 text-green"
          >
            <Image
              width={24}
              height={24}
              src={`/nav/icon-nav-line.png`}
              alt="LINE"
            />
            @Baroness101
          </Link>
        </div>
        <div className="flex flex-col lg:flex-row gap-3 justify-center w-full lg:max-w-none max-w-[400px] mx-auto">
          <CategoryButton className="text-center rounded-lg whitespace-nowrap font-bold text-light bg-green py-3 lg:w-[220px]" />
          <Link
            href={linkList.guide}
            className="text-center rounded-lg whitespace-nowrap font-bold text-light bg-green py-3 lg:w-[220px]"
          >
            ขั้นตอนการเช่าขุด
          </Link>
          <Link
            href={linkList.contact}
            className="text-center rounded-lg whitespace-nowrap font-bold text-light bg-green py-3 lg:w-[220px]"
          >
            ติดต่อเรา
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CategoryHero;
