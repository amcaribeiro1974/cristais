
import { Check } from "lucide-react";

export const About = () => {
  return (
    <section className="py-16 bg-white" id="sobre">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-sm font-semibold text-water-600 uppercase tracking-wider">Genuinamente Maranhense</span>
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Sobre a Cristais Soluções Ambientais</h2>
            <p className="text-gray-600 mb-6">
              Somos uma empresa genuinamente maranhense, dedicada à segurança ambiental, 
              flexibilidade e eficiência. Contamos com uma equipe experiente, com mais de 
              20 anos de atuação no mercado.
            </p>
            <p className="text-gray-600 mb-6">
              Nosso portfólio inclui soluções ambientais que atendem integralmente às 
              legislações federais, estaduais e municipais.
            </p>
            
            <div className="space-y-4 mb-6">
              <h3 className="text-xl font-semibold text-eco-700">Nossa Missão</h3>
              <p className="text-gray-600">
                Oferecer soluções que minimizem os impactos ambientais da sociedade moderna, 
                com foco na gestão de resíduos sólidos, especialmente os gerados por serviços de saúde.
              </p>
              
              <h3 className="text-xl font-semibold text-eco-700">Nossa Visão</h3>
              <p className="text-gray-600">
                Tornar-se a maior empresa do Maranhão, atendendo 80% do estado e sendo referência 
                no Norte e Nordeste. Expandir para municípios menos rentáveis, com logística e 
                tecnologia de ponta, através de centros de distribuição e softwares especializados.
              </p>
            </div>
          </div>
          
          <div className="bg-eco-50 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-eco-800">Nossos Diferenciais</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Check className="h-6 w-6 text-eco-600 mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Atendimento com empatia e compromisso</span>
              </li>
              <li className="flex items-start">
                <Check className="h-6 w-6 text-eco-600 mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Agilidade na resolução de problemas (até 30 minutos)</span>
              </li>
              <li className="flex items-start">
                <Check className="h-6 w-6 text-eco-600 mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Uso intensivo de tecnologia (zero papel)</span>
              </li>
              <li className="flex items-start">
                <Check className="h-6 w-6 text-eco-600 mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Flexibilidade com segurança e preço justo</span>
              </li>
              <li className="flex items-start">
                <Check className="h-6 w-6 text-eco-600 mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Priorizamos a personalização em cada projeto</span>
              </li>
              <li className="flex items-start">
                <Check className="h-6 w-6 text-eco-600 mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Compromisso constante com a inovação e práticas sustentáveis</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
