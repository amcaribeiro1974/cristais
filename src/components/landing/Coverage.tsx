
import { MapPin } from "lucide-react";

export const Coverage = () => {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-water-50 to-eco-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <MapPin className="h-10 w-10 md:h-12 md:w-12 text-water-600 mx-auto mb-3 md:mb-4" />
          <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-gray-800">Atuação Regional</h2>
          <p className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8">
            Atendemos todo o Maranhão e estados vizinhos, com visão de 
            cobrir 80% do estado e expandir para o Norte e Nordeste.
          </p>
          
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg">
            <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-water-700">Você está no Maranhão?</h3>
            <p className="text-sm md:text-base text-gray-600 mb-4">
              Oferecemos coleta porta a porta em todo o estado. 
              Se você gera mais de 200L/dia de resíduos, a legislação exige 
              que você contrate um serviço especializado.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
