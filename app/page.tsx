import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import ParticleCanvas from "@/components/ParticleCanvas";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <ParticleCanvas />
      <Navbar />
      <Hero />
      <Services />
      <WhyUs />
      <ContactForm />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
