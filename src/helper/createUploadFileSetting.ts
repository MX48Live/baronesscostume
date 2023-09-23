export function createUploadFileSetting(files: File[], BUCKET: string) {
  const uploadFileSetting = files.map((file: File) => {
    return {
      Bucket: BUCKET,
      Key: file.name,
      Body: file,
      ContentType: file.type,
    };
  });
  return uploadFileSetting;
}
