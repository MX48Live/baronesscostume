import { authOption } from "@/app/(auth)/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

async function AdminAuthen() {
  const session = await getServerSession(authOption);

  return (
    <div>
      Welcome to admin ja
      <div>{session && <div>{session?.user?.email}</div>}</div>
      <div>
        <a href="/signout">Sign Out</a>
      </div>
    </div>
  );
}

export default AdminAuthen;
