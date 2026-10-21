import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Innovations from "@/components/Innovations";
import Perspective from "@/components/Perspective";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="midnight min-h-screen overflow-x-clip">
    <a href="#technology" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-20 focus:z-[60] focus:rounded-full focus:bg-[hsl(var(--mn-blue))] focus:px-4 focus:py-2">
      Skip to content
    </a>
    <Header />
    <main>
      <Hero />
      <Innovations />
      <Perspective />
      <Contact />
    </main>
    <Footer />
  </div>
);

export default Index;
