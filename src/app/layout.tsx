import type { Metadata } from "next";
import "@/styles/Main.scss";

export const metadata: Metadata = {
  title: "Baroness Costume System",
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
