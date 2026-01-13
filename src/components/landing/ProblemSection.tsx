import { XCircle, AlertTriangle } from "lucide-react";

const ProblemSection = () => {
  const problems = [
    "Estuda pela apostila do Detran e fica mais confuso",
    "Lê, relê e nada fixa na memória",
    "Medo de reprovar e perder dinheiro",
    "Tenta decorar leis e trava na prova",
    "Quer passar logo e tirar sua CNH",
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          {/* Hook */}
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-traffic-yellow/10 text-traffic-yellow-dark text-sm font-semibold mb-6">
            <AlertTriangle className="w-4 h-4" />
            Te ajudo a passar na prova do Detran sem sofrimento
          </span>

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Você se identifica com isso?
          </h2>
          
          <p className="text-lg text-muted-foreground mb-12">
            Chega de reprovar por não entender a prova
          </p>

          {/* Problems grid */}
          <div className="grid md:grid-cols-2 gap-4 mb-12">
            {problems.map((problem, index) => (
              <div 
                key={index}
                className="flex items-center gap-4 p-5 bg-card rounded-xl shadow-card border border-destructive/20 text-left group hover:shadow-card-hover transition-all duration-300"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center">
                  <XCircle className="w-5 h-5 text-destructive" />
                </div>
                <p className="text-foreground font-medium">{problem}</p>
              </div>
            ))}
          </div>

          {/* CTA text */}
          <div className="bg-gradient-primary p-6 rounded-2xl">
            <p className="text-lg md:text-xl font-semibold text-primary-foreground">
              Se respondeu <span className="underline decoration-2">sim</span> para pelo menos uma dessas perguntas, continue lendo. ↓
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
