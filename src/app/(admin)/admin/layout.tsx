import { SignedOut, currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

async function ResticLayout({ children }: { children: React.ReactNode }) {
  // const whitelistEmail = ["mx48live@gmail.com"];
  // const user = await currentUser();
  // if (user) {
  //   const email = user!.emailAddresses[0].emailAddress;
  //   if (whitelistEmail.includes(email) == false) {
  //     redirect("/");
  //   }
  // }
  return <>{children}</>;
}

export default ResticLayout;
