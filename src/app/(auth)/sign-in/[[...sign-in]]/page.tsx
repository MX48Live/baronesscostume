import { SignIn } from "@clerk/nextjs";

function PageSignIn() {
  return (
    <div className="flex h-[80vh] w-full justify-center items-center align-middle">
      <SignIn />
    </div>
  );
}

export default PageSignIn;
