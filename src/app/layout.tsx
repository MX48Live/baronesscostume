import type { Metadata } from "next";
import Script from "next/script";

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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-WNXQXJQ8');`,
          }}
        />
      </head>
      <body>
        <noscript>
          <iframe
            title="gtm-iframe"
            src="https://www.googletagmanager.com/ns.html?id=GTM-WNXQXJQ8"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
