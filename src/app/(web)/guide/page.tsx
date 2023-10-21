import Image from "next/image";
import Link from "next/link";

function GuidePage() {
  return (
    <div className="bg-bglight py-12 pb-40">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-bold text-green text-[30px] mb-7">
          ขั้นตอนการเช่าชุด
        </h2>
        <Link
          href="/"
          className="whitespace-nowrap items-center inline-block text-[30px]"
        >
          <span className="flex items-center gap-3 text-green">
            <span>
              <Image
                width={24}
                height={24}
                src={`/contact/icon-call-gold.png`}
                alt="Call"
              />
            </span>
            <span>092-461-6196</span>
          </span>
        </Link>

        <div className="mt-10">
          <div className="text-xl font-bold text-green">
            แสกนไลน์เพื่อสอบถามการเช่าชุด
          </div>
          <div className="mt-3">
            <Image
              width={200}
              height={200}
              src={`/qr-code.png`}
              alt="Line QR Code"
              className="inline-block"
            />
          </div>
        </div>

        <div className="text-xl font-bold text-green mt-10">
          ช่องทางการติดต่อเพิ่มเติม
        </div>
        <div className="flex justify-center gap-4 md:gap-10 lg:gap-20 mt-5">
          <div>
            <Link href={"#"} target="_blank">
              <Image
                width={40}
                height={40}
                src={`/contact/icon-facebook.png`}
                alt="Facebook"
                className="inline-block"
              />
              <div className="mt-1 text-sm text-green">Baroness Costume</div>
            </Link>
          </div>
          <div>
            <Link href={"https://lin.ee/2Pc9pyC"} target="_blank">
              <Image
                width={40}
                height={40}
                src={`/contact/icon-line.png`}
                alt="LINE"
                className="inline-block"
              />
              <div className="mt-1 text-sm text-green">@baroness101</div>
            </Link>
          </div>
          <div>
            <Link href={"#"} target="_blank">
              <Image
                width={40}
                height={40}
                src={`/contact/icon-ig.png`}
                alt="Instagram"
                className="inline-block"
              />
              <div className="mt-1 text-sm text-green">Baroness Costume</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GuidePage;
