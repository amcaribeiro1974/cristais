
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, Send, MapPin, Globe } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useIsMobile } from "@/hooks/use-mobile";

export const Contact = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="py-16 bg-white" id="contato">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Entre em Contato</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos prontos para oferecer a melhor solução para a gestão dos seus resíduos
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6 text-eco-800">Fale Conosco</h3>
            <form>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome</label>
                  <Input id="name" placeholder="Seu nome completo" className="w-full" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <Input id="email" type="email" placeholder="seu@email.com" className="w-full" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefone</label>
                  <Input id="phone" placeholder="(98) 00000-0000" className="w-full" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensagem</label>
                  <Textarea id="message" placeholder="Descreva sua necessidade..." className="w-full min-h-[120px]" />
                </div>
                <Button className="w-full bg-eco-600 hover:bg-eco-700 text-white">
                  Enviar Mensagem
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </form>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6 text-eco-800">Informações de Contato</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-eco-600 mr-3 mt-1" />
                <div>
                  <h4 className="font-medium text-gray-800">Telefone</h4>
                  <p className="text-gray-600">98 99154-6787</p>
                  <p className="text-gray-600">98 3012-5141</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-eco-600 mr-3 mt-1" />
                <div>
                  <h4 className="font-medium text-gray-800">Email</h4>
                  <p className="text-gray-600">comercial@cristais.eco.br</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-eco-600 mr-3 mt-1" />
                <div>
                  <h4 className="font-medium text-gray-800">Endereço</h4>
                  <p className="text-gray-600">Rua 12, Qd.F, Lote 04, Módulo A, Distrito Industrial Maracanã, São Luís – MA</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Globe className="h-6 w-6 text-eco-600 mr-3 mt-1" />
                <div>
                  <h4 className="font-medium text-gray-800">Instagram</h4>
                  <p className="text-gray-600">@cristaisresiduos</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-eco-50 rounded-lg">
              <div className="flex flex-col md:flex-row items-center gap-4">
                <Avatar className={`${isMobile ? 'w-20 h-20' : 'w-24 h-24'} border-2 border-eco-100`}>
                  <AvatarImage src="/lovable-uploads/4c686c0c-bbf4-4d78-ab5f-8e69912e6924.png" alt="Clara - Assistente Virtual" />
                  <AvatarFallback className="bg-eco-100 text-eco-700 text-lg">CR</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-semibold text-eco-800 mb-2">Conheça a Clara</h4>
                  <p className="text-gray-600 mb-4">
                    Nossa assistente virtual especializada em gestão de resíduos, 
                    pronta para tirar suas dúvidas e agendar serviços.
                  </p>
                  <Button variant="outline" className="border-eco-600 text-eco-700 hover:bg-eco-100">
                    Falar com a Clara
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
