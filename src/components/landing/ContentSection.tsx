import { CheckCircle2 } from "lucide-react";

const ContentSection = () => {
  const contents = [
    "Como o Detran pensa e monta as questões",
    "Interpretação correta de placas",
    "Circulação e conduta na prova",
    "Direção defensiva cobrada pelo Detran",
    "Primeiros socorros sem decoreba",
    "Infrações explicadas sem números",
    "Mecânica básica focada em segurança",
    "Regras mentais que resolvem várias questões",
    "Como chegar confiante no dia da prova",
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-2 rounded-full bg-traffic-yellow/10 text-traffic-yellow-dark text-sm font-semibold mb-6">
            📋 Conteúdo Completo
          </span>

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            O que você vai aprender
          </h2>

          <p className="text-lg text-muted-foreground mb-12">
            Linguagem simples, exemplos práticos, regras de ouro e foco total em aprovação.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {contents.map((content, index) => (
              <div 
                key={index}
                className="flex items-start gap-3 p-5 bg-muted rounded-xl text-left group hover:bg-traffic-green/10 transition-colors duration-300 border border-transparent hover:border-traffic-green/30"
              >
                <CheckCircle2 className="w-6 h-6 text-traffic-green flex-shrink-0 mt-0.5" />
                <p className="text-foreground font-medium">{content}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-dark rounded-2xl p-8 text-accent-foreground">
            <h3 className="font-display text-2xl mb-6">O que você recebe:</h3>
            <div className="grid sm:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-traffic-yellow flex-shrink-0" />
                <span>E-book Método Aprova CNH (PDF)</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-traffic-yellow flex-shrink-0" />
                <span>Conteúdo atualizado</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-traffic-yellow flex-shrink-0" />
                <span>Leitura fácil e organizada</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-traffic-yellow flex-shrink-0" />
                <span>Estude pelo celular ou imprima</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
