
import { Button } from "@/components/ui/button";
import { Instagram, Facebook, Mail, Phone, MapPin, ExternalLink } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="mb-4">
              <img 
                src="/lovable-uploads/2068a95d-9450-4637-af6c-ec9d8aeefa98.png" 
                alt="Cristais Soluções Ambientais" 
                className="h-20"
              />
            </div>
            <p className="text-gray-400 mb-4">
              Soluções ambientais que atendem integralmente às legislações federais,
              estaduais e municipais.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="mailto:comercial@cristais.eco.br" className="text-gray-400 hover:text-white transition">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li>
                <a href="#servicos" className="text-gray-400 hover:text-eco-400 transition">Gestão de Resíduos</a>
              </li>
              <li>
                <a href="#servicos" className="text-gray-400 hover:text-eco-400 transition">Transporte de Cargas Perigosas</a>
              </li>
              <li>
                <a href="#servicos" className="text-gray-400 hover:text-eco-400 transition">Consultoria Ambiental</a>
              </li>
              <li>
                <a href="#servicos" className="text-gray-400 hover:text-eco-400 transition">Aluguel de Equipamentos</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Links Úteis</h3>
            <ul className="space-y-2">
              <li>
                <a href="#sobre" className="text-gray-400 hover:text-eco-400 transition">Sobre Nós</a>
              </li>
              <li>
                <a href="#clientes" className="text-gray-400 hover:text-eco-400 transition">Quem Atendemos</a>
              </li>
              <li>
                <a href="#faq" className="text-gray-400 hover:text-eco-400 transition">Perguntas Frequentes</a>
              </li>
              <li>
                <a href="#contato" className="text-gray-400 hover:text-eco-400 transition">Contato</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-eco-400 mr-2 mt-1" />
                <div>
                  <p className="text-gray-400">98 99154-6787</p>
                  <p className="text-gray-400">98 3012-5141</p>
                </div>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-eco-400 mr-2 mt-1" />
                <span className="text-gray-400">comercial@cristais.eco.br</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-eco-400 mr-2 mt-1" />
                <span className="text-gray-400">Rua 12, Qd.F, Lote 04, Módulo A, Distrito Industrial Maracanã, São Luís – MA</span>
              </li>
              <li className="flex items-start">
                <Instagram className="h-5 w-5 text-eco-400 mr-2 mt-1" />
                <span className="text-gray-400">@cristaisresiduos</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Cristais Soluções Ambientais. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
