"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Navbar() {
  const pathName = usePathname();

  return (
    <div className="flex justify-between px-4 shadow-sm items-center bg-green h-[50px]">
      <div className="flex gap-6">
        <div className="font-bold text-light flex items-center">
          <Link href="/admin">Baroness Admin</Link>
        </div>
        <div className="flex text-light ">
          <Link
            href="/admin"
            className={clsx(
              `px-4 hover:bg-gold rounded-sm h-[48px] flex items-center`,
              pathName == "/admin" && "bg-gold"
            )}
          >
            Home
          </Link>
          <Link
            href="/admin/photos"
            className={clsx(
              `px-4 hover:bg-gold rounded-sm h-[48px] flex items-center`,
              pathName == "/admin/photos" && "bg-gold"
            )}
          >
            Upload
          </Link>
        </div>
      </div>
      <div>{/* <UserButton afterSignOutUrl="/" /> */}</div>
    </div>
  );
}

export default Navbar;
