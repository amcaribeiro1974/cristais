
import { Button } from "@/components/ui/button";
import { MessageSquare, Clock, Phone, Truck } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

export const CrisAssistant = () => {
  const isMobile = useIsMobile();
  
  const features = [
    {
      icon: <MessageSquare className="h-6 w-6 text-eco-600" />,
      title: "Orçamento instantâneo sob medida",
      description: "Receba uma proposta personalizada para suas necessidades específicas."
    },
    {
      icon: <Clock className="h-6 w-6 text-eco-600" />,
      title: "Atendimento 24h com respostas imediatas",
      description: "Estamos sempre disponíveis para atender suas demandas."
    },
    {
      icon: <Truck className="h-6 w-6 text-eco-600" />,
      title: "Agende coleta ou troca de caixa em segundos",
      description: "Processo rápido e eficiente para sua conveniência."
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-eco-600" />,
      title: "Orientação clara sobre normas ambientais",
      description: "Tire suas dúvidas sobre legislação e requisitos legais."
    },
    {
      icon: <Truck className="h-6 w-6 text-eco-600" />,
      title: "Sugestão do contêiner ideal para seu volume",
      description: "Receba recomendações personalizadas para suas necessidades."
    },
    {
      icon: <Phone className="h-6 w-6 text-eco-600" />,
      title: "Transferência rápida para um especialista, se preciso",
      description: "Atendimento humano sempre disponível quando necessário."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-eco-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Conheça a Cris</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nossa assistente virtual especializada em gestão de resíduos, 
              pronta para facilitar seu dia a dia com atendimento personalizado.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <div className="flex items-center mb-3">
                      {feature.icon}
                      <h3 className="font-semibold text-gray-800 ml-2">{feature.title}</h3>
                    </div>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 text-center lg:text-left">
                <Button className="bg-eco-600 hover:bg-eco-700 text-white px-8 py-6 text-lg">
                  Falar com a Cris
                </Button>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="w-3/4 max-w-xs">
                <img 
                  src="/lovable-uploads/d836feb4-2522-48ce-8866-c997a3a8a49e.png" 
                  alt="Cris - Assistente Virtual de Gestão de Resíduos" 
                  className="w-full h-auto object-contain rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
