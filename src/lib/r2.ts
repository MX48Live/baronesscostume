import { S3Client } from "@aws-sdk/client-s3";

const ACCOUNT_ID = process.env.NEXT_PUBLIC_CF_ACCOUNT_ID as string;
const ACCESS_KEY_ID = process.env.NEXT_PUBLIC_R2_ACCESS_ID as string;
const SECRET_ACCESS_KEY = process.env.NEXT_PUBLIC_R2_SECRET as string;

export const R2 = new S3Client({
  region: "auto",
  endpoint: `https://${ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: ACCESS_KEY_ID,
    secretAccessKey: SECRET_ACCESS_KEY,
  },
});
