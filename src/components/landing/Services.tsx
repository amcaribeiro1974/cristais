
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Factory, ShoppingBag, Recycle, Truck, FileText } from "lucide-react";

export const Services = () => {
  const services = [
    {
      title: "Gestão de Resíduos",
      description: "Disponibilizamos as melhores práticas no gerenciamento de resíduos sólidos Classe I e II - NBR 10.004 incluindo os gerados na rede de saúde humana e animal.",
      icon: Activity,
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
    {
      title: "Aluguel de Equipamentos",
      description: "Oferecemos aluguel de caixas para resíduos perigosos (classe I) e não perigosos (classe II), proporcionando soluções seguras e eficientes.",
      icon: ShoppingBag,
      details: [
        "Caixas para resíduos classe I e II",
        "Caixas compactadoras para condomínios",
        "Caixas para resíduos da construção civil",
      ]
    },
    {
      title: "Transbordo de Resíduos",
      description: "Oferecemos soluções de gerenciamento de resíduos sólidos Classe I e II, seguindo as diretrizes da NBR 10.004.",
      icon: Factory,
      details: [
        "Transferência entre veículos",
        "Otimização logística",
        "Certificado de destinação final",
      ]
    },
    {
      title: "Gestão de Resíduos Industriais",
      description: "Atendemos conforme legislação CONAMA 313, para óleo, graxa, tintas e fluídos contaminados.",
      icon: Recycle,
      details: [
        "Tambores metálicos (200L)",
        "Caixas estacionárias (5 m³)",
        "Coleta por quilo, porta a porta",
      ]
    }
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
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
      </div>
    </section>
  );
};
