
import { Building, Home, Landmark, Hospital, Beaker, Dog, School, ShoppingCart, Scissors, HeartPulse, FlaskConical, PenTool, GraduationCap, Pill, TestTube, Syringe } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

export const Clients = () => {
  const isMobile = useIsMobile();
  const clientTypes = [
    { icon: Hospital, label: "Hospitais e Clínicas" },
    { icon: Beaker, label: "Laboratórios Analíticos" },
    { icon: HeartPulse, label: "Necrotérios e Funerárias" },
    { icon: Pill, label: "Drogarias e Farmácias" },
    { icon: GraduationCap, label: "Ensino e Pesquisa" },
    { icon: FlaskConical, label: "Distribuidores Farmacêuticos" },
    { icon: TestTube, label: "Diagnóstico In Vitro" },
    { icon: Syringe, label: "Atendimento Móvel" },
    { icon: Scissors, label: "Serviços de Acupuntura" },
    { icon: PenTool, label: "Serviços de Tatuagem" },
    { icon: Dog, label: "Pet Shops" },
    { icon: Building, label: "Indústrias" },
    { icon: Landmark, label: "Condomínios" },
    { icon: School, label: "Escolas e Faculdades" },
    { icon: ShoppingCart, label: "Shoppings" },
    { icon: Home, label: "Restaurantes" },
  ];
  
  return (
    <section className="py-12 md:py-16 bg-white" id="clientes">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-gray-800">Quem Atendemos</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Soluções para diversos segmentos que geram resíduos sólidos, 
            especialmente grandes geradores (acima de 200 litros/dia).
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-6">
          {clientTypes.map((client, index) => (
            <div key={index} className="bg-eco-50 rounded-lg p-3 md:p-6 text-center transition-all duration-300 hover:shadow-md hover:bg-eco-100">
              <div className="w-12 h-12 md:w-16 md:h-16 mx-auto bg-white rounded-full flex items-center justify-center mb-2 md:mb-4 shadow-sm">
                <client.icon className={`${isMobile ? 'h-6 w-6' : 'h-8 w-8'} text-eco-600`} />
              </div>
              <h3 className="font-medium text-sm md:text-base text-gray-800">{client.label}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
