import Footer from "@/components/web/Footer";
import Header from "@/components/web/Header";
import NotFoundHero from "@/components/web/NotFoundHero";

function NotFound() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <NotFoundHero />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default NotFound;
