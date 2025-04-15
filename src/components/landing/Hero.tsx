
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative bg-gradient-to-b from-eco-100 to-white py-20 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506744038136-46273834b3fb')] bg-cover bg-center opacity-10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-eco-800">
            Soluções ambientais que fazem a diferença
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-700 max-w-3xl mx-auto">
            Minimizamos o impacto ambiental da sua empresa com gestão 
            profissional de resíduos sólidos no Maranhão.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-eco-600 hover:bg-eco-700 text-white px-8 py-6 text-lg">
              Solicitar Orçamento
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="border-eco-600 text-eco-700 hover:bg-eco-50 px-8 py-6 text-lg">
              Conheça Nossos Serviços
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};
