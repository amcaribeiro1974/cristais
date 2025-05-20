
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Hospital, Pill, TestTube, GraduationCap, Utensils, Building } from "lucide-react";

export const Portfolio = () => {
  const clientCategories = [
    {
      id: "hospitais",
      name: "Hospitais",
      icon: Hospital,
      clients: ["Rede D'Or", "Rede São Luís", "Rede Sarah", "Hapvida"]
    },
    {
      id: "farmacias",
      name: "Farmácias",
      icon: Pill,
      clients: ["Drogasil", "Drogaria Globo", "Pague Menos", "Ultrafarma"]
    },
    {
      id: "laboratorios",
      name: "Laboratórios",
      icon: TestTube,
      clients: ["Diagnósticos da América", "Diagnósticos Santo André", "Cedro", "Fleury", "Laboratório São Luís", "CentroLab"]
    },
    {
      id: "faculdades",
      name: "Educação",
      icon: GraduationCap,
      clients: ["Pitágoras", "Uninassau", "IPTAN", "Edufor", "IESF"]
    },
    {
      id: "restaurantes",
      name: "Alimentação",
      icon: Utensils,
      clients: ["Sal e Brasa", "Barriga Verde", "Casa Rossini", "Tempero Nordestino"]
    },
    {
      id: "hoteis",
      name: "Hotelaria",
      icon: Building,
      clients: ["Blue Tree", "Hotel Ilha Costeira"]
    }
  ];

  return (
    <section className="py-16 bg-white" id="portfolio">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Nossos Principais Clientes</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Atendemos diversos segmentos como hospitais, farmácias, laboratórios, escolas, 
            faculdades, lanchonetes, restaurantes e muito mais, sempre com soluções personalizadas.
          </p>
        </div>

        <Tabs defaultValue="hospitais" className="w-full max-w-5xl mx-auto">
          <TabsList className="grid grid-cols-3 md:grid-cols-6 mb-8">
            {clientCategories.map(category => (
              <TabsTrigger key={category.id} value={category.id} className="text-sm md:text-base">
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {clientCategories.map(category => (
            <TabsContent key={category.id} value={category.id}>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center justify-center mb-6">
                  <category.icon className="h-10 w-10 text-eco-600 mr-3" />
                  <h3 className="text-2xl font-bold text-eco-800">{category.name}</h3>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {category.clients.map((client, index) => (
                    <Card key={index} className="bg-white hover:shadow-md transition-shadow">
                      <CardContent className="flex items-center justify-center p-6 h-24">
                        <p className="text-center font-medium text-gray-800">{client}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="text-center mt-12">
          <Button className="bg-eco-600 hover:bg-eco-700 text-white px-6 py-2 text-lg">
            Solicite uma Proposta
          </Button>
        </div>
      </div>
    </section>
  );
};
