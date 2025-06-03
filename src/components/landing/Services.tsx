
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Factory, ShoppingBag, Recycle, Truck, FileText, Hospital, Box, Container } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const Services = () => {
  const hospitalServices = [
    {
      title: "Gestão de Resíduos Hospitalares",
      description: "Disponibilizamos as melhores práticas no gerenciamento de resíduos sólidos Classe I e II - NBR 10.004 incluindo os gerados na rede de saúde humana e animal.",
      icon: Hospital,
      details: [
        "Eco Box Cristais",
        "Bombonas de 20L, 50L e 200L",
        "Coleta por quilo (medicamentos vencidos)",
      ]
    },
    {
      title: "Transporte de Cargas Perigosas",
      description: "Transporte rodoviário de produtos perigosos seguindo rigorosamente as normas da ANTT, garantindo a segurança pública e conformidade regulatória.",
      icon: Truck,
      details: [
        "Conformidade com regulamentos ANTT",
        "Veículos especializados",
        "Equipe treinada e certificada",
      ]
    },
    {
      title: "Consultoria Ambiental",
      description: "Somos uma empresa qualificada e dedicada à elaboração e execução de projetos especializados na área do meio ambiente.",
      icon: FileText,
      details: [
        "Projetos ambientais",
        "Licenciamento ambiental",
        "Planos de gerenciamento de resíduos",
      ]
    },
  ];

  const industrialServices = [
    {
      title: "Gestão de Resíduos Industriais",
      description: "Atendemos conforme legislação CONAMA 313/2002, para óleo, graxa, tintas e fluídos contaminados.",
      icon: Factory,
      details: [
        "Tambores metálicos (200L)",
        "Caixas estacionárias (5 m³ e 30 m³)",
        "Containers de 1 m³",
        "Caminhões poliguindaste / roll-on roll-off",
      ]
    },
    {
      title: "Transbordo de Resíduos",
      description: "Oferecemos soluções de gerenciamento de resíduos sólidos industriais, seguindo as diretrizes da NBR 10.004.",
      icon: Recycle,
      details: [
        "Transferência entre veículos",
        "Otimização logística",
        "Certificado de destinação final",
      ]
    },
  ];

  const classIIServices = [
    {
      title: "Resíduos Classe II",
      description: "Soluções completas para gerenciamento de resíduos comuns não perigosos, incluindo coleta, transporte e destinação final adequada.",
      icon: Container,
      details: [
        "Caixas estacionárias 5 m³ e 30 m³",
        "Caminhões poliguindaste / roll-on roll-off",
        "Contêineres de 1 m³",
        "Coleta, compactação e destinação em aterro licenciado",
      ]
    },
    {
      title: "Aluguel de Equipamentos",
      description: "Oferecemos aluguel de caixas e equipamentos para resíduos não perigosos (classe II), proporcionando soluções eficientes.",
      icon: Box,
      details: [
        "Caixas para resíduos classe II",
        "Caixas compactadoras para condomínios",
        "Caixas para resíduos da construção civil",
        "Caminhão compactador",
      ]
    },
  ];

  return (
    <section className="py-16 bg-gray-50" id="servicos">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Nossos Serviços</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Temos tudo que sua empresa precisa: coleta, transporte, tratamento, destino final e licença
          </p>
        </div>
        
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-4 text-center text-eco-800">Áreas de Atuação</h3>
          <div className="flex justify-center mb-8">
            <Tabs defaultValue="hospitalar" className="w-full max-w-3xl">
              <TabsList className="grid grid-cols-3 mb-8">
                <TabsTrigger value="hospitalar" className="text-base">Hospitalar</TabsTrigger>
                <TabsTrigger value="industrial" className="text-base">Industrial</TabsTrigger>
                <TabsTrigger value="classeii" className="text-base">Resíduos Classe II</TabsTrigger>
              </TabsList>
              
              <TabsContent value="hospitalar">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {hospitalServices.map((service, index) => (
                    <Card key={index} className="bg-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                      <CardHeader className="pb-2">
                        <div className="w-12 h-12 rounded-full bg-eco-100 flex items-center justify-center mb-4">
                          <service.icon className="h-6 w-6 text-eco-600" />
                        </div>
                        <CardTitle className="text-xl text-eco-800">{service.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-gray-600 mb-4">{service.description}</CardDescription>
                        <ul className="space-y-2">
                          {service.details.map((detail, i) => (
                            <li key={i} className="text-sm text-gray-700 flex items-center">
                              <span className="w-2 h-2 bg-eco-500 rounded-full mr-2"></span>
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="industrial">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {industrialServices.map((service, index) => (
                    <Card key={index} className="bg-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                      <CardHeader className="pb-2">
                        <div className="w-12 h-12 rounded-full bg-eco-100 flex items-center justify-center mb-4">
                          <service.icon className="h-6 w-6 text-eco-600" />
                        </div>
                        <CardTitle className="text-xl text-eco-800">{service.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-gray-600 mb-4">{service.description}</CardDescription>
                        <ul className="space-y-2">
                          {service.details.map((detail, i) => (
                            <li key={i} className="text-sm text-gray-700 flex items-center">
                              <span className="w-2 h-2 bg-eco-500 rounded-full mr-2"></span>
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="classeii">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {classIIServices.map((service, index) => (
                    <Card key={index} className="bg-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                      <CardHeader className="pb-2">
                        <div className="w-12 h-12 rounded-full bg-eco-100 flex items-center justify-center mb-4">
                          <service.icon className="h-6 w-6 text-eco-600" />
                        </div>
                        <CardTitle className="text-xl text-eco-800">{service.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-gray-600 mb-4">{service.description}</CardDescription>
                        <ul className="space-y-2">
                          {service.details.map((detail, i) => (
                            <li key={i} className="text-sm text-gray-700 flex items-center">
                              <span className="w-2 h-2 bg-eco-500 rounded-full mr-2"></span>
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};
