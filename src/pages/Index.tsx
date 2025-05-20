
import { Hero } from "@/components/landing/Hero";
import { About } from "@/components/landing/About";
import { Services } from "@/components/landing/Services";
import { Clients } from "@/components/landing/Clients";
import { Coverage } from "@/components/landing/Coverage";
import { Faq } from "@/components/landing/Faq";
import { Contact } from "@/components/landing/Contact";
import { Footer } from "@/components/landing/Footer";
import { Header } from "@/components/landing/Header";
import { CTA } from "@/components/landing/CTA";
import { Portfolio } from "@/components/landing/Portfolio";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Services />
        <Coverage />
        <Portfolio />
        <Clients />
        <CTA />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
