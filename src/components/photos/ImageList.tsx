import Image from "next/image";

function ImageList({ imageList }: any) {
  return (
    <>
      {imageList.Contents.map((item: any) => (
        <div
          key={item.Key}
          className="shadow-sm hover:shadow-md border-white border-4 transition-all"
          style={{
            width: "120px",
            height: "120px",
            display: "block",
            position: "relative",
          }}
        >
          <Image
            src={process.env.NEXT_PUBLIC_ASSETS_URL + "/" + item.Key}
            alt={item.Key || ""}
            fill={true}
            sizes="120px"
            priority={true}
            style={{
              objectFit: "contain",
              position: "absolute",
            }}
          />
        </div>
      ))}
    </>
  );
}

export default ImageList;
