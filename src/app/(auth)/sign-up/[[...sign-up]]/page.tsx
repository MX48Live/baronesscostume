import { SignUp } from "@clerk/nextjs";

function PageSignUp() {
  return (
    <div className="flex h-[80vh] w-full justify-center items-center align-middle">
      <SignUp />
    </div>
  );
}

export default PageSignUp;
