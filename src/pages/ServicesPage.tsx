import Header from "@/components/Header";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const ServicesPage = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <div className="pt-24">
      <Services />
      <Pricing />
      <Contact />
    </div>
    <Footer />
  </div>
);

export default ServicesPage;
