import Image from "next/image";
import Link from "next/link";

function Hero() {
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
          className="hidden lg:inline-block"
        />
        <div className="py-6 lg:pt-12 lg:pb-8 max-w-[900px] mx-auto text-green">
          Baroness Costume บริการเช่าชุดหลากหลายประเภท ชุดไทย ชุดไทยร่วมสมัย
          ชุดไทยประยุกต์ ชุดแฟนซี ชุดคอสเพลย์ ชุดลีดเดอร์ ชุดนานาชาติ ชุด AEC
          ชุดแดนซ์เซอร์ ชุดนักร้อง ชุดราตรี ชุดย้อนยุค ชุดเจ้าหญิง ชุดเจ้าชาย
          ชุดการแสดง ฯลฯ
        </div>
        <div className="gap-3 items-center justify-center hidden lg:flex mb-7">
          <Link
            href="/"
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
            href="/"
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
          <Link
            href="/"
            className="text-center rounded-lg whitespace-nowrap font-bold text-light bg-green py-3 lg:w-[220px]"
          >
            หมวดหมู่ชุด
          </Link>
          <Link
            href="/"
            className="text-center rounded-lg whitespace-nowrap font-bold text-light bg-green py-3 lg:w-[220px]"
          >
            ขั้นตอนการเช่าชุด
          </Link>
          <Link
            href="/"
            className="text-center rounded-lg whitespace-nowrap font-bold text-light bg-green py-3 lg:w-[220px]"
          >
            ติดต่อเรา
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
