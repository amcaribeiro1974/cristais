
import { MapPin } from "lucide-react";

export const Coverage = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-water-50 to-eco-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <MapPin className="h-12 w-12 text-water-600 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Atuação no Maranhão</h2>
          <p className="text-xl text-gray-600 mb-8">
            Nossa atuação comercial é focada no estado do Maranhão, 
            com visão de cobrir 80% do estado e expandir para o Norte e Nordeste.
          </p>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-water-700">Você está no Maranhão?</h3>
            <p className="text-gray-600 mb-4">
              Oferecemos coleta porta a porta em todo o estado. 
              Se você gera mais de 200L/dia de resíduos, a legislação exige 
              que você contrate um serviço especializado.
            </p>
            <p className="text-gray-600 font-medium">
              Também aceitamos resíduos de outros estados, desde que entregues no Maranhão.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
