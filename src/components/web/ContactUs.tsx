import { linkList } from "@/data/linklist";
import Image from "next/image";
import Link from "next/link";

function ContactUs() {
  return (
    <div className="bg-bglight py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-bold text-green text-[30px] mb-7">ติดต่อเรา</h2>
        <Link
          href={linkList.tel}
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
            สแกนไลน์เพื่อสอบถามการเช่าชุด
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
        <div className="grid max-w-[800px] mx-auto grid-cols-2 md:grid-cols-4 justify-center gap-4 md:gap-10 lg:gap-20 mt-5">
          <div>
            <Link href={linkList.facebook} target="_blank">
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
            <Link href={linkList.line} target="_blank">
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
            <Link href={linkList.instagram} target="_blank">
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
          <div>
            <Link href={linkList.tiktok} target="_blank">
              <Image
                width={40}
                height={40}
                src={`/contact/icon-tiktok.png`}
                alt="Tiktok"
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

export default ContactUs;
