import { GoogleAnalytics } from "@next/third-parties/google";

import Footer from "@/components/web/Footer";
import Header from "@/components/web/Header";

function WebLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
      <GoogleAnalytics gaId="G-VNXGSSB6QF" />
    </>
  );
}

export default WebLayout;
