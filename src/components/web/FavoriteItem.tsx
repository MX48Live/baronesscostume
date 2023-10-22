import clsx from "clsx";
import { useEffect, useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

function FavoriteItem({ keyItem }: { keyItem: string }) {
  const arr = getDataFromLocalStorage();
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  function handleAddFavorite(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    e.stopPropagation();
    e.preventDefault();
    addDataToLocalStorage(keyItem);
    setIsFavorite(true);
  }
  function handleRemoveFavorite(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    e.stopPropagation();
    e.preventDefault();
    removeDataFromLocalStorage(keyItem);
    setIsFavorite(false);
  }

  function getDataFromLocalStorage() {
    const data = localStorage.getItem("baroness_favorite");
    if (data) {
      return JSON.parse(data);
    }
    return [];
  }

  function addDataToLocalStorage(data: string) {
    const arr = getDataFromLocalStorage();
    arr.push(data);
    localStorage.setItem("baroness_favorite", JSON.stringify(arr));
  }

  function removeDataFromLocalStorage(data: string) {
    const arr = getDataFromLocalStorage();
    const index = arr.indexOf(data);
    if (index > -1) {
      arr.splice(index, 1);
    }
    localStorage.setItem("baroness_favorite", JSON.stringify(arr));
  }

  useEffect(() => {
    if (arr.includes(keyItem)) {
      setIsFavorite(true);
    }
  }, []);

  return (
    <>
      {!isFavorite && (
        <button
          className={
            "p-2 bg-gold/20 rounded-md border border-gold/20 text-gold/50 hover:text-gold/100 cursor-pointer outline-none"
          }
          onClick={(e) => handleAddFavorite(e)}
        >
          <AiFillHeart />
        </button>
      )}
      {isFavorite && (
        <button
          className={
            "p-2 bg-gold rounded-md border border-gold/20 text-white hover:bg-gold/40 cursor-pointer outline-none"
          }
          onClick={(e) => handleRemoveFavorite(e)}
        >
          <AiFillHeart />
        </button>
      )}
    </>
  );
}

export default FavoriteItem;
