
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useIsMobile } from "@/hooks/use-mobile";

export const Faq = () => {
  const isMobile = useIsMobile();
  
  const faqs = [
    {
      question: "Vocês fazem gestão de resíduos?",
      answer: "Sim. A Cristais atua com resíduos de saúde, industriais e comerciais."
    },
    {
      question: "Quais tipos de resíduos vocês coletam?",
      answer: "Resíduos infectantes, contaminados, óleos, graxas, fluídos, medicamentos vencidos, resíduos classe 2 e resíduos comuns."
    },
    {
      question: "Atendem minha cidade?",
      answer: "Se estiver no Maranhão, sim. Também aceitamos resíduos de outros estados vizinhos."
    },
    {
      question: "Como agendo a coleta?",
      answer: "Através da assistente virtual Cris, via WhatsApp."
    },
    {
      question: "Como recebo meu certificado de destinação?",
      answer: "Após a coleta e tratamento, é emitido um certificado com validade legal."
    },
    {
      question: "Como saber se estou obrigado a gerenciar meus resíduos?",
      answer: "Se sua atividade econômica gera mais de 200L/dia, você se enquadra na legislação de grande gerador e precisa contratar esse serviço."
    }
  ];
  
  return (
    <section className="py-12 md:py-16 bg-gray-50" id="faq">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-gray-800">Perguntas Frequentes</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Tire suas dúvidas sobre nossos serviços
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 mb-3 md:mb-4 rounded-lg overflow-hidden">
                <AccordionTrigger className="px-4 md:px-6 py-3 md:py-4 bg-white hover:bg-gray-50 text-gray-800 hover:text-eco-700 text-sm md:text-base">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-4 md:px-6 py-3 md:py-4 bg-white text-gray-600 text-xs md:text-sm">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
