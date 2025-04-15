
import { Building, Home, Landmark, Hospital, Beaker, Dog, School, ShoppingCart, Needle, HeartPulse, Flask, PenTool, GraduationCap, Pill, TestTubes, Syringe } from "lucide-react";

export const Clients = () => {
  const clientTypes = [
    { icon: Hospital, label: "Hospitais e Clínicas" },
    { icon: Beaker, label: "Laboratórios Analíticos" },
    { icon: HeartPulse, label: "Necrotérios e Funerárias" },
    { icon: Pill, label: "Drogarias e Farmácias" },
    { icon: GraduationCap, label: "Ensino e Pesquisa" },
    { icon: Flask, label: "Distribuidores Farmacêuticos" },
    { icon: TestTubes, label: "Diagnóstico In Vitro" },
    { icon: Syringe, label: "Atendimento Móvel" },
    { icon: Needle, label: "Serviços de Acupuntura" },
    { icon: PenTool, label: "Serviços de Tatuagem" },
    { icon: Dog, label: "Pet Shops" },
    { icon: Building, label: "Indústrias" },
    { icon: Landmark, label: "Condomínios" },
    { icon: School, label: "Escolas e Faculdades" },
    { icon: ShoppingCart, label: "Shoppings" },
    { icon: Home, label: "Restaurantes" },
  ];
  
  return (
    <section className="py-16 bg-white" id="clientes">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Quem Atendemos</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soluções para diversos segmentos que geram resíduos sólidos, 
            especialmente grandes geradores (acima de 200 litros/dia).
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {clientTypes.map((client, index) => (
            <div key={index} className="bg-eco-50 rounded-lg p-6 text-center transition-all duration-300 hover:shadow-md hover:bg-eco-100">
              <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center mb-4 shadow-sm">
                <client.icon className="h-8 w-8 text-eco-600" />
              </div>
              <h3 className="font-medium text-gray-800">{client.label}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
