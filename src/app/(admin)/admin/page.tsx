import { UserButton } from "@clerk/nextjs";

function AdminAuthen() {
  return (
    <div>
      Welcome to admin ja
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}

export default AdminAuthen;
