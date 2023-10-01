"use client";

import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function SignOut() {
  // const router = useRouter();
  // const [initialized, setInitialized] = useState(false);
  // useEffect(() => {
  //   if (!initialized) {
  //     signOut({ redirect: false }).then(() => router.push("/"));
  //     setInitialized(true);
  //   }
  // }, [router, initialized]);
  return null;
}

export default SignOut;
