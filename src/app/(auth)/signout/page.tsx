"use client";

import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

function SignOut() {
  const router = useRouter();
  signOut({ redirect: false }).then(() => router.push("/"));
  return null;
}

export default SignOut;
