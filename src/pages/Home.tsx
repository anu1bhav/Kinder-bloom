import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Services from "../components/sections/Services";
import WhyChoose from "../components/sections/WhyChoose";
import Contact from "../components/sections/Contact";
import FAQ from "../components/sections/FAQ";
import Footer from "../components/layout/Footer";
import SEO from "../components/common/SEO";
import FloatingWhatsapp from "../components/common/FloatingWhatsapp";

export default function Home() {
  return (
    <>
      <SEO />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyChoose />
      <Contact />
      <FAQ />
      <Footer />
      <FloatingWhatsapp/>
    </>
  );
}