import Resizer from "react-image-file-resizer";

export async function handleResizeFile(
  files: File[],
  type: "thumbnail" | "full"
) {
  const promiseArr = files.map((file: File) => {
    return () => resizeImage(file, type);
  });
  const response = await Promise.allSettled(promiseArr.map((fn: any) => fn()));
  const filesList = response.map((item: any) => {
    return item.value;
  });
  return filesList;
}

async function resizeImage(file: File, type: "thumbnail" | "full") {
  return new Promise((resolve) => {
    Resizer.imageFileResizer(
      file,
      type == "thumbnail" ? 300 : 1200,
      type == "thumbnail" ? 300 : 1200,
      "WEBP",
      90,
      0,
      (uri) => {
        resolve(uri);
      },
      "file"
    );
  });
}
