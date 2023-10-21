import { ClerkProvider } from "@clerk/nextjs";

async function AdminLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

export default AdminLayout;

export const runtime = "edge";
