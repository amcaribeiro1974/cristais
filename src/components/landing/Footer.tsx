
import { Button } from "@/components/ui/button";
import { Instagram, Facebook, Mail, Phone, MapPin, ExternalLink } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-xl mb-4 text-eco-400">Cristais</h3>
            <p className="text-gray-400 mb-4">
              Soluções ambientais com foco na gestão de resíduos sólidos, 
              minimizando o impacto ambiental da sociedade moderna.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="mailto:contato@cristais.eco.br" className="text-gray-400 hover:text-white transition">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li>
                <a href="#servicos" className="text-gray-400 hover:text-eco-400 transition">Resíduos de Saúde</a>
              </li>
              <li>
                <a href="#servicos" className="text-gray-400 hover:text-eco-400 transition">Resíduos Industriais</a>
              </li>
              <li>
                <a href="#servicos" className="text-gray-400 hover:text-eco-400 transition">Resíduos Classe 2</a>
              </li>
              <li>
                <a href="#servicos" className="text-gray-400 hover:text-eco-400 transition">Serviços Especiais</a>
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
                <span className="text-gray-400">(98) 3303-8585</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-eco-400 mr-2 mt-1" />
                <span className="text-gray-400">contato@cristais.eco.br</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-eco-400 mr-2 mt-1" />
                <span className="text-gray-400">São Luís, Maranhão</span>
              </li>
            </ul>
            <Button className="mt-4 bg-eco-600 hover:bg-eco-700 text-white">
              <a href="https://cristais.eco.br/" className="flex items-center" target="_blank" rel="noopener noreferrer">
                Visitar Site Oficial
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Cristais Soluções Ambientais. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
