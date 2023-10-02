import { ClerkProvider } from "@clerk/nextjs";

async function AdminLayout({ children }: { children: React.ReactNode }) {
  return <ClerkProvider>{children}</ClerkProvider>;
}

export default AdminLayout;

export const runtime = "edge";
