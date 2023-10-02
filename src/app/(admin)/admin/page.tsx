import { UserButton } from "@clerk/nextjs";

async function AdminAuthen() {
  return (
    <div>
      Welcome to admin ja
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}

export default AdminAuthen;
