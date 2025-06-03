
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const CTA = () => {
  const whatsappUrl = "https://wa.me/559891753189";

  return (
    <section className="py-16 bg-gradient-to-r from-eco-600 to-water-600 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para uma gestão de resíduos mais eficiente e sustentável?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Atendemos em todo o Maranhão com soluções personalizadas para o seu negócio.
            Solicite um orçamento sem compromisso.
          </p>
          <div className="flex justify-center">
            <Button 
              size="lg" 
              className="bg-white text-eco-700 hover:bg-gray-100 px-8 text-lg"
              onClick={() => window.open(whatsappUrl, '_blank')}
            >
              Solicitar Orçamento
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
