import Header from "@/components/web/Header";
import React from "react";

function WebLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>{children}</main>
    </div>
  );
}

export default WebLayout;
