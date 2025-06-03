import { Button } from "@/components/ui/button";
import { Instagram, Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

export const Footer = () => {
  const isMobile = useIsMobile();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="mb-4 flex justify-center sm:justify-start">
              <img 
                src="/lovable-uploads/2068a95d-9450-4637-af6c-ec9d8aeefa98.png" 
                alt="Cristais Soluções Ambientais" 
                className="h-16 md:h-20"
              />
            </div>
            <p className="text-gray-400 mb-4 text-sm md:text-base text-center sm:text-left">
              Soluções ambientais que atendem integralmente às legislações federais,
              estaduais e municipais.
            </p>
            <div className="flex space-x-4 justify-center sm:justify-start">
              <a 
                href="https://instagram.com/cristaisresiduos" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="mailto:comercial@cristais.eco.br" 
                className="text-gray-400 hover:text-white transition"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="text-center sm:text-left">
            <h3 className="font-bold text-lg mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li>
                <a href="#servicos" className="text-gray-400 hover:text-eco-400 transition text-sm md:text-base">Gestão de Resíduos</a>
              </li>
              <li>
                <a href="#servicos" className="text-gray-400 hover:text-eco-400 transition text-sm md:text-base">Transporte de Cargas Perigosas</a>
              </li>
              <li>
                <a href="#servicos" className="text-gray-400 hover:text-eco-400 transition text-sm md:text-base">Consultoria Ambiental</a>
              </li>
              <li>
                <a href="#servicos" className="text-gray-400 hover:text-eco-400 transition text-sm md:text-base">Aluguel de Equipamentos</a>
              </li>
            </ul>
          </div>
          
          <div className="text-center sm:text-left">
            <h3 className="font-bold text-lg mb-4">Links Úteis</h3>
            <ul className="space-y-2">
              <li>
                <a href="#sobre" className="text-gray-400 hover:text-eco-400 transition text-sm md:text-base">Sobre Nós</a>
              </li>
              <li>
                <a href="#clientes" className="text-gray-400 hover:text-eco-400 transition text-sm md:text-base">Quem Atendemos</a>
              </li>
              <li>
                <a href="#faq" className="text-gray-400 hover:text-eco-400 transition text-sm md:text-base">Perguntas Frequentes</a>
              </li>
            </ul>
          </div>
          
          <div className="text-center sm:text-left">
            <h3 className="font-bold text-lg mb-4">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start justify-center sm:justify-start">
                <Phone className="h-5 w-5 text-eco-400 mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-400 text-sm md:text-base">(98) 3303-8585</span>
              </li>
              <li className="flex items-start justify-center sm:justify-start">
                <Mail className="h-5 w-5 text-eco-400 mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-400 text-sm md:text-base">comercial@cristais.eco.br</span>
              </li>
              <li className="flex items-start justify-center sm:justify-start">
                <MapPin className="h-5 w-5 text-eco-400 mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-400 text-xs md:text-base">Rua 12, Qd.F, Lote 04, Módulo A, Distrito Industrial Maracanã, São Luís – MA</span>
              </li>
              <li className="flex items-start justify-center sm:justify-start">
                <Instagram className="h-5 w-5 text-eco-400 mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-400 text-sm md:text-base">@cristaisresiduos</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 md:mt-12 pt-6 md:pt-8 text-center text-gray-500 text-xs md:text-sm">
          <p>&copy; {new Date().getFullYear()} Cristais Soluções Ambientais. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
