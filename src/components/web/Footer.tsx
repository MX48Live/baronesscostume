import { category } from "@/data/category";
import Image from "next/image";
import Link from "next/link";
import CategoryButton from "./CategoryButton";
import { linkList } from "@/data/linklist";

function Footer() {
  return (
    <div
      className="bg-green pt-16 py-6 text-white bg-no-repeat bg-right-bottom bg-[length:600px]"
      style={{ backgroundImage: `url("/footer/footer-bg.png")` }}
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 ">
          <div className="mb-8">
            <h3 className="font-bold text-[20px] mb-3">Baroness Costume</h3>
            <div className="mb-5">
              <ul className="flex gap-4 flex-col md:flex-row text-link">
                <li>
                  <Link href={linkList.home} className="hover:underline">
                    หน้าแรก
                  </Link>
                </li>
                <li>
                  <CategoryButton className="hover:underline" />
                </li>
                <li>
                  <Link href={linkList.guide} className="hover:underline">
                    ขั้นตอนการเช่าชุด
                  </Link>
                </li>
                <li>
                  <Link href={linkList.contact} className="hover:underline">
                    ติดต่อเรา
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mb-5">
              <p className="">
                ห้องเสื้อ บารอนเนส 111/105 ปากซอยโพธิ์แก้ว 19 (ลาดพร้าว 101){" "}
                <br className="hidden lg:block" />
                แขวงนวมินทร์ เขตบึงกุ่ม กทม 10240
                <br />
                <Link
                  href={linkList.map}
                  target="_blank"
                  className="text-link mt-2 hover:underline inline-block"
                >
                  ดูแผนที่ Google Map
                </Link>
              </p>
            </div>
            <div className="mb-5">
              <p>
                วันจันทร์ - ศุกร์ 11:00 น. — 19:00 น. <br />
                วันเสาร์ 11:00 น. — 17:00 น. (หยุดวันอาทิตย์)
              </p>
            </div>
            <div className="mb-5">
              <div className="hover:underline inline-block text-link">
                <Link href={linkList.tel} className="flex gap-2 items-center">
                  <div>
                    <Image
                      src="/footer/icon-footer-call.png"
                      alt=""
                      width={12}
                      height={12}
                    />
                  </div>
                  <div>092-461-6196</div>
                </Link>
              </div>
            </div>
            <div className="mb-5">
              <div className="flex gap-4">
                <Link href={linkList.facebook} target="_blank">
                  <Image
                    src="/footer/icon-footer-facebook.png"
                    alt="Facebook"
                    width={30}
                    height={30}
                  />
                </Link>
                <Link href={linkList.line} target="_blank">
                  <Image
                    src="/footer/icon-footer-line.png"
                    alt="LINE"
                    width={30}
                    height={30}
                  />
                </Link>
                <Link href={linkList.instagram} target="_blank">
                  <Image
                    src="/footer/icon-footer-ig.png"
                    alt="Instagram"
                    width={30}
                    height={30}
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="mb-8">
            <h3 className="font-bold text-[20px] mb-3">บริการเช่าชุด</h3>
            <div className="grid md:grid-cols-2 gap-2">
              {category.map((item) => (
                <div key={item.id} className="block">
                  <Link
                    href={`/category/${item.id}`}
                    className=" text-link hover:underline text-sm"
                  >
                    เช่า{item.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="text-center text-sm mt-6">
          Copyright © Since 2022 by Baroness Costume. <br />
          All rights reserved
        </div>
      </div>
    </div>
  );
}

export default Footer;
