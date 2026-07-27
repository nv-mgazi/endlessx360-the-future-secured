import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import Vision from "@/components/Vision";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div id="top" className="min-h-screen bg-background scroll-smooth">
      <Header />
      <main>
        <Hero />
        <Services />
        <Pricing />
        <Vision />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
