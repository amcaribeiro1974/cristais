
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Factory, ShoppingBag, Recycle } from "lucide-react";

export const Services = () => {
  const services = [
    {
      title: "Gestão de Resíduos de Serviços de Saúde",
      description: "Coleta porta a porta com caminhão tipo baú. Atendendo clínicas, hospitais, laboratórios e serviços de saúde humana e animal.",
      icon: Activity,
      details: [
        "Eco Box Cristais",
        "Bombonas de 20L, 50L e 200L",
        "Coleta por quilo (medicamentos vencidos)",
      ]
    },
    {
      title: "Gestão de Resíduos Industriais",
      description: "Atendemos conforme legislação CONAMA 313, para óleo, graxa, tintas e fluídos contaminados.",
      icon: Factory,
      details: [
        "Tambores metálicos (200L)",
        "Caixas estacionárias (5 m³)",
        "Coleta por quilo, porta a porta",
      ]
    },
    {
      title: "Gestão de Resíduos Classe 2",
      description: "Serviços para estabelecimentos comerciais e grandes geradores, com coleta porta a porta.",
      icon: ShoppingBag,
      details: [
        "Caixas de 1 m³",
        "Coleta com caminhões compactadores",
        "Certificado de destinação final",
      ]
    },
    {
      title: "Outros Serviços",
      description: "Soluções complementares para diversos tipos de resíduos e necessidades específicas.",
      icon: Recycle,
      details: [
        "Aluguel de caixas compactadoras",
        "Caixas para resíduos da construção civil",
        "Transbordo de resíduos",
      ]
    }
  ];

  return (
    <section className="py-16 bg-gray-50" id="servicos">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Nossos Serviços</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos soluções completas em gestão de resíduos para diferentes segmentos
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
