import Footer from "@/components/web/Footer";
import Header from "@/components/web/Header";
import React from "react";

function WebLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default WebLayout;
