import { useModalStore } from "@/store/Modal";
import Image from "next/image";
import Link from "next/link";
import CategoryButton from "./CategoryButton";
import { linkList } from "@/data/linklist";

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
        <p className="py-6 block lg:pt-12 lg:pb-8 max-w-[900px] mx-auto text-green">
          Baroness Costume ห้องเสื้อ บารอนเนส คอสตูม
          บริการให้เช่าชุดหลากหลายประเภท เช่น เช่าชุดไทย เช่าชุดไทยจิตรลดา
          เช่าชุดไทยบรมพิมาน เช่าชุดไทยจักรี เช่าชุดนางนพมาศ เช่าชุดไทยผู้ชาย
          เช่าชุดราชปะแตน เช่าชุดไทยรัชกาลที่1-9 เช่าชุดพี่หมื่น เช่าชุดการะเกด
          เช่าชุดไทยนักรบ เช่าชุดนาคี เช่าชุดพญานาค เช่าชุดเขมร เช่าชุดพญานาคราช
          เช่าชุดไทยภาคเหนือ เช่าชุดแม้ว เช่าชุดล้านนา เช่าชุดพื้นเมือง
          เช่าชุดไทยภาคอีสาน เช่าชุดเซิ้ง เช่าชุดภาคใต้ เช่าชุด4ภาค เช่าชุดกุมาร
          เช่าชุดเงาะป่า เช่าชุดฤาษี เช่าชุดราตรีผ้าไทยประดับเพชร เช่าชุดไทยเด็ก
          เช่าชุดไทยประยุกต์ เช่าชุดไทยศิวาลัย เช่าชุด ทุเรียนแฟนซีประยุกต์
          เช่าชุดบวชนาค เช่าชุดนานาชาติ เช่าชุดประจำชาติ เช่าชุดอินเดีย
          เช่าชุดอาหรับ เช่าชุดสาหรี เช่าชุดจินนี่ เช่าชุดคังคุไบ เช่าชุดแลงก้า
          เช่าชุดจีน เช่าชุดจีนโบราณ เช่าชุดกี่เพ้า เช่าชุดฮองเฮา เช่าชุดฮ่องเต้
          เช่าชุดฮั่นฝู เช่าชุดกรีกโรมัน เช่าชุดกรีก เช่าชุดเกาหลี เช่าชุดฮันบก
          เช่าชุดญี่ปุ่น เช่าชุดกิโมโน เช่าชุดเกอิชา เช่าชุดยูกะตะ เช่าชุดซามูไร
          เช่าชุดพม่า เช่าชุดเพลิงพระนาง เช่าชุดอินโดนีเซีย เช่าชุดอินเดียแดง
          เช่าชุดคนป่า เช่าชุดโบฮีเมียน เช่าชุดคลีโอพัตรา เช่าชุดอียิปต์
          เช่าชุดฟาโรห์ เช่าชุดย้อนยุค เช่าชุดลายดอก เช่าชุดทองกวาว เช่าชุดวนิดา
          เช่าชุดธีมงานวัด เช่าชุดแหยมยโสธร เช่าชุดมนต์รักลูกทุ่ง เช่าชุดวินเทจ
          เช่าชุดจุฑาเทพ เช่าชุดแดนซ์เซอร์ เช่าชุดนักร้อง เช่าชุดคัลเลอร์ฟูล
          เช่าชุดหางเครื่อง เช่าชุดขนนก เช่าชุดเต้น เช่าชุดแดนซ์เซอร์ลูกทุ่ง
          เช่าชุดหมอลำ เช่าชุดนางโชว์ เช่าชุดอาชีพ เช่าชุดอาชีพในฝันทุกประเภท
          เช่าปีกนางฟ้า เช่าชุดแกสบี้ เช่าชุดแฟนซีดอกไม้ เช่าชุดฮาวาย
          เช่าชุดทะเล เช่าชุดอวกาศ เช่าชุดหนังสีดำ เช่าชุดหนังสีเงิน
          เช่าชุดฮาโลวีน เช่าชุดผี เช่าชุดแฟนซีแม่มด เช่าชุดซุปเปอร์ฮีโร่
          เช่าชุดแฟนซีสัตว์ เช่าชุดสัตว์ เช่าชุดซานต้า เช่าชุดแซนตี้
          เช่าชุดเอลฟ์ เช่าชุดซานตาคลอส เช่าชุดราตรีสั้น เช่าชุดราตรียาว
          เช่าชุดเดรสสั้น เช่าชุดเดรสยาว เช่าชุดขอเข้าเฝ้า เช่าชุดเข้าเฝ้า
          เช่าชุดสูทดำชาย เช่าชุดจิตลดาสีดำ เช่าชุดพระราชทานเพลิง
          เช่าชุดเจ้าหญิงหลุยส์ เช่าชุดเจ้าหญิงดิสนีย์ เช่าชุดเจ้าหญิงเทพนิยาย
          เช่าชุดสูทเจ้าชาย เช่าชุดเจ้าชาย เช่าชุดเจ้าชายหลุยส์
          และเช่าเครื่องประดับรองเท้าและพ็อบต่างๆมากมาย เช่าชุดลาดพร้าว
          กรุงเทพมหานคร เช่าชุดติดต่อผ่าน Line : @baroness101
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

export default Hero;
