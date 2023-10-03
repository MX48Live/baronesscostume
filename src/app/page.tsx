import { SignIn } from "@clerk/nextjs";

function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 text-center">
      <div>
        <img
          src="/web-logo.png"
          className="w-[400px] max-w-full"
          alt="Baroness Costume"
        />
        <br />
        <br />
        <h1 className="text-green">Coming Soon...</h1>
      </div>
    </main>
  );
}

export default Home;
