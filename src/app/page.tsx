export const runtime = "edge";

async function serverData() {
  return { data: "Hello world" };
}

export default async function Home() {
  const data = await serverData();
  return <h1>{data.data}</h1>;
}
