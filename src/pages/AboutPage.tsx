import Header from "@/components/Header";
import Vision from "@/components/Vision";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const AboutPage = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <div className="pt-24">
      <About />
      <Vision />
      <Contact />
    </div>
    <Footer />
  </div>
);

export default AboutPage;
