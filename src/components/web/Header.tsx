import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <div className="bg-[#FFFFFF] shadow-md px-5 py-8 lg:py-3 flex flex-col lg:flex-row items-center justify-between text-green gap-5">
      <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-10">
        <div>
          <Link href="/">
            <Image
              width={155}
              height={40}
              src={`/navbar-logo.png`}
              alt="Baroness Costume"
              className="hidden lg:block"
            />
            <Image
              width={140}
              height={72}
              src={`/nav/main-logo.png`}
              alt="Baroness Costume"
              className="block lg:hidden"
            />
          </Link>
        </div>
        <div className="flex gap-4 text-sm md:text-base">
          <Link href="/" className="hover:underline font-bold">
            หน้าแรก
          </Link>
          <Link href="/" className="hover:underline">
            หมวดหมู่ชุด
          </Link>
          <Link href="/" className="hover:underline">
            ขั้นตอนการเช่าชุด
          </Link>
          <Link href="/" className="hover:underline">
            ติดต่อเรา
          </Link>
        </div>
      </div>
      <div className="flex gap-3 items-center">
        <Link
          href="/"
          className="border-2 border-green rounded-lg whitespace-nowrap font-bold px-2 py-1.5 flex gap-1 items-center hover:bg-green/10"
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
          className="border-2 border-green rounded-lg whitespace-nowrap font-bold px-2 py-1.5 flex gap-1 items-center hover:bg-green/10"
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
    </div>
  );
}

export default Header;
