export async function renameFile(files: File[], prefix: string) {
  let i = -1;
  const res = files.map((file: File) => {
    i++;
    let name = new Date().getTime() + i;
    const newFile = new File([file], `${prefix}${name}.WEBP`, {
      type: file.type,
    });
    return newFile;
  });
  return res;
}

export async function renameThumbnailFile(files: File[]) {
  const res = files.map((file: File) => {
    const nameArr = file.name.split(".");
    if (nameArr.length == 4) {
      const newName = `${nameArr[0]}.${nameArr[1]}.thumbnail.${nameArr[2]}.${nameArr[3]}`;
      const newFile = new File([file], newName, {
        type: file.type,
      });
      return newFile;
    } else {
      const newName = `${nameArr[0]}.thumbnail.${nameArr[1]}.${nameArr[2]}`;
      const newFile = new File([file], newName, {
        type: file.type,
      });
      return newFile;
    }
  });
  return res;
}
