
import { Hero } from "@/components/landing/Hero";
import { About } from "@/components/landing/About";
import { Services } from "@/components/landing/Services";
import { Clients } from "@/components/landing/Clients";
import { Coverage } from "@/components/landing/Coverage";
import { Faq } from "@/components/landing/Faq";
import { Footer } from "@/components/landing/Footer";
import { Header } from "@/components/landing/Header";
import { CTA } from "@/components/landing/CTA";
import { Portfolio } from "@/components/landing/Portfolio";
import { CrisAssistant } from "@/components/landing/CrisAssistant";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col w-full overflow-x-hidden">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Services />
        <Coverage />
        <Portfolio />
        <CrisAssistant />
        <Clients />
        <CTA />
        <Faq />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
