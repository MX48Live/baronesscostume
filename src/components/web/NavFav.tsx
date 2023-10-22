import Link from "next/link";
import { AiFillHeart } from "react-icons/ai";

function NavFav() {
  function getDataFromLocalStorage() {
    const data = localStorage.getItem("baroness_favorite");
    if (data) {
      return JSON.parse(data);
    }
    return [];
  }

  return (
    <Link
      href={"/favorite"}
      className="border-2 bg-green rounded-lg whitespace-nowrap font-bold px-2 py-1.5 w-full flex items-center justify-center text-white h-[44px] min-w-[44px] gap-2"
    >
      <span>
        <AiFillHeart />
      </span>
      <span className="lg:hidden">รูปที่บันทึกไว้</span>
    </Link>
  );
}

export default NavFav;
