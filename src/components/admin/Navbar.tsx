"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Navbar() {
  const pathName = usePathname();

  const handleLogout = async () => {
    try {
      const response = await fetch("/logout", {
        method: "POST",
      });
      
      if (response.ok) {
        // Redirect to home page after successful logout
        window.location.href = "/";
      } else {
        // Fallback: redirect anyway
        window.location.href = "/";
      }
    } catch (error) {
      // Fallback: redirect anyway
      window.location.href = "/";
    }
  };

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
              pathName == "/admin" && "bg-gold",
            )}
          >
            Home
          </Link>
          <Link
            href="/admin/photos"
            className={clsx(
              `px-4 hover:bg-gold rounded-sm h-[48px] flex items-center`,
              pathName == "/admin/photos" && "bg-gold",
            )}
          >
            Upload
          </Link>
        </div>
      </div>
      <div>
        <button
          onClick={handleLogout}
          className="text-light hover:bg-gold rounded-sm px-4 h-[48px] flex items-center"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Navbar;
