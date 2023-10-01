import SessionProvider from "@/components/admin/SessionProvider";
import { getServerSession } from "next-auth";
import { notFound } from "next/navigation";

async function AdminLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession();
  if (!session) {
    notFound();
  }
  return <SessionProvider session={session}>{children}</SessionProvider>;
}

export default AdminLayout;
