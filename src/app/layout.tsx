import type { Metadata } from "next";

import "@/styles/Main.scss";
export const metadata: Metadata = {
  metadataBase: new URL("https://baronesscostume.com"),
  title: "Baroness Costume",
  description:
    "บริการเช่าชุดหลากหลายประเภท ชุดไทย ชุดไทยร่วมสมัย ชุดไทยประยุกต์ ชุดแฟนซี ชุดคอสเพลย์ ชุดลีดเดอร์ ชุดนานาชาติ ชุด AEC ชุดแดนซ์เซอร์ ชุดนักร้อง ชุดราตรี ชุดย้อนยุค ชุดเจ้าหญิง ชุดเจ้าชาย ชุดการแสดง ฯลฯ",
  openGraph: {
    title: "Baroness Costume",
    description:
      "บริการเช่าชุดหลากหลายประเภท ชุดไทย ชุดไทยร่วมสมัย ชุดไทยประยุกต์ ชุดแฟนซี ชุดคอสเพลย์ ชุดลีดเดอร์ ชุดนานาชาติ ชุด AEC ชุดแดนซ์เซอร์ ชุดนักร้อง ชุดราตรี ชุดย้อนยุค ชุดเจ้าหญิง ชุดเจ้าชาย ชุดการแสดง ฯลฯ",
    type: "website",
    url: "https://baronesscostume.com",
    images: "/baroness-costume.png",
  },
  alternates: {
    canonical: "/",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body>{children}</body>
    </html>
  );
}
