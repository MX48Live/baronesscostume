import UploadFile from "@/components/UploadFile";
import { R2 } from "@/lib/r2";
import { ListObjectsV2Command } from "@aws-sdk/client-s3";

export default async function Home() {
  // const data = await R2.send(
  //   new ListObjectsV2Command({ Bucket: "baronesscostume" })
  // );

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello from Nextjs</h1>
      {/* <a
        href={`https://pub-cf8f417de90d4aeab3b14d308e812e9b.r2.dev/${data.Contents[0].Key}`}
      >
        {data &&
          data.Contents?.map((item: any) => (
            <div key={item.key}>{item.Key}</div>
          ))}
      </a> */}

      <UploadFile />
    </main>
  );
}
