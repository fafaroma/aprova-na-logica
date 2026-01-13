import { CheckCircle2, XCircle } from "lucide-react";

const ForWhoSection = () => {
  const forYou = [
    "Está tirando a primeira CNH",
    "Quer passar de primeira",
    "Tem pouco tempo para estudar",
    "Prefere explicações claras e diretas",
    "Quer estudar com estratégia",
  ];

  const notForYou = [
    "Quer decorar todo o CTB",
    "Não pretende estudar de verdade",
    "Procura fraude ou \"jeitinho\"",
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
              Para quem é o Método?
            </h2>
            <p className="text-lg text-muted-foreground">
              Seja honesto consigo mesmo
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* For you */}
            <div className="bg-card rounded-2xl shadow-card overflow-hidden border-2 border-traffic-green">
              <div className="bg-gradient-success p-4 text-center">
                <h3 className="font-display text-xl text-secondary-foreground flex items-center justify-center gap-2">
                  <CheckCircle2 className="w-6 h-6" />
                  É para você se...
                </h3>
              </div>
              <div className="p-6 space-y-4">
                {forYou.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-traffic-green flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Not for you */}
            <div className="bg-card rounded-2xl shadow-card overflow-hidden border-2 border-muted-foreground/30">
              <div className="bg-muted-foreground/10 p-4 text-center">
                <h3 className="font-display text-xl text-muted-foreground flex items-center justify-center gap-2">
                  <XCircle className="w-6 h-6" />
                  NÃO é para você se...
                </h3>
              </div>
              <div className="p-6 space-y-4">
                {notForYou.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <XCircle className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForWhoSection;
