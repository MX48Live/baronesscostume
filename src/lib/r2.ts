import { S3Client } from "@aws-sdk/client-s3";

const CF_R2_ACCOUNT_ID = process.env.NEXT_PUBLIC_CF_R2_ACCOUNT_ID as string;

const CF_R2_R_ACCESS_KEY_ID = process.env
  .NEXT_PUBLIC_CF_R2_R_ACCESS_KEY_ID as string;
const CF_R2_R_SECRET_ACCESS_KEY = process.env
  .NEXT_PUBLIC_CF_R2_R_SECRET_ACCESS_KEY as string;

export const R2 = new S3Client({
  region: "auto",
  endpoint: `https://${CF_R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: CF_R2_R_ACCESS_KEY_ID,
    secretAccessKey: CF_R2_R_SECRET_ACCESS_KEY,
  },
});

const CF_R2_RW_ACCESS_KEY_ID = process.env
  .NEXT_PUBLIC_CF_R2_RW_ACCESS_KEY_ID as string;
const CF_R2_RW_SECRET_ACCESS_KEY = process.env
  .NEXT_PUBLIC_CF_R2_RW_SECRET_ACCESS_KEY as string;

export const RW2 = new S3Client({
  region: "auto",
  endpoint: `https://${CF_R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: CF_R2_RW_ACCESS_KEY_ID,
    secretAccessKey: CF_R2_RW_SECRET_ACCESS_KEY,
  },
});
