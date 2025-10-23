import { redirect } from "next/navigation";
import { isAuthenticated } from "@/lib/auth";

async function AdminLayout({ children }: { children: React.ReactNode }) {
  const isAuth = await isAuthenticated();

  if (!isAuth) {
    redirect("/admin-login");
  }

  return <>{children}</>;
}

export default AdminLayout;

export const runtime = "edge";
