import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Serve para qualquer estado do Brasil?",
      answer: "Sim! O conteúdo é baseado no Código de Trânsito Brasileiro (CTB), que é padrão nacional. Funciona para todos os estados.",
    },
    {
      question: "É só um e-book?",
      answer: "Sim, é um e-book completo com método e estratégia. Nada de enrolação ou conteúdo desnecessário. Vai direto ao ponto para você passar na prova.",
    },
    {
      question: "Dá para passar só com este material?",
      answer: "Sim! O material foi desenvolvido para te dar tudo que você precisa para passar. Basta aplicar o método e estudar com consistência.",
    },
    {
      question: "Em quanto tempo consigo estudar todo o conteúdo?",
      answer: "Depende da sua dedicação, mas a maioria das pessoas consegue estudar todo o material em poucos dias. O conteúdo é direto e focado.",
    },
    {
      question: "Como recebo o material?",
      answer: "Imediatamente após a confirmação do pagamento, você recebe o e-book por e-mail. Pode começar a estudar na hora!",
    },
    {
      question: "Posso acessar pelo celular?",
      answer: "Sim! O e-book é em PDF e pode ser lido em qualquer dispositivo: celular, tablet, computador. Você também pode imprimir se preferir.",
    },
  ];

  return (
    <section className="py-20 bg-background" id="faq">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-traffic-yellow/10 text-traffic-yellow-dark text-sm font-semibold mb-6">
              ❓ Dúvidas Frequentes
            </span>

            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
              Perguntas Frequentes
            </h2>

            <p className="text-lg text-muted-foreground">
              Tire suas dúvidas antes de começar
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-muted rounded-xl border-0 px-6 data-[state=open]:bg-traffic-yellow/10"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
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

export default FAQSection;
