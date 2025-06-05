import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const whatsappUrl = "https://wa.me/559891753189";
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const menuItems = [
    { name: "Home", href: "#" },
    { name: "Sobre", href: "#sobre" },
    { name: "Serviços", href: "#servicos" },
    { name: "Clientes", href: "#clientes" },
    { name: "FAQ", href: "#faq" },
  ];
  
  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/fe266214-e2af-4ac3-b463-bd473152d94d.png" 
              alt="Cristais Soluções Ambientais" 
              className={isMobile ? "h-16" : "h-20"}
            />
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {menuItems.map((item) => (
              <a 
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-eco-700 transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </nav>
          
          <div className="hidden md:flex items-center">
            <div className="flex items-center mr-6">
              <Phone className="h-4 w-4 text-eco-600 mr-2" />
              <span className="text-gray-700">(98) 3303-8585</span>
            </div>
            <Button 
              className="bg-eco-600 hover:bg-eco-700 text-white"
              onClick={() => window.open(whatsappUrl, '_blank')}
            >
              Solicitar Orçamento
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-gray-600 focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4">
          <div className="container mx-auto px-4">
            <nav className="flex flex-col space-y-3">
              {menuItems.map((item) => (
                <a 
                  key={item.name}
                  href={item.href}
                  className="text-gray-600 hover:text-eco-700 py-2 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="flex items-center py-2">
                <Phone className="h-4 w-4 text-eco-600 mr-2" />
                <span className="text-gray-700">(98) 3303-8585</span>
              </div>
              <Button 
                className="bg-eco-600 hover:bg-eco-700 text-white w-full"
                onClick={() => window.open(whatsappUrl, '_blank')}
              >
                Solicitar Orçamento
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};
