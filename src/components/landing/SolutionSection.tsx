import { XCircle, ArrowRight, Lightbulb } from "lucide-react";

const SolutionSection = () => {
  const wrongMethods = [
    "Estuda tudo como se tivesse o mesmo peso",
    "Decora leis em vez de entender situações",
    "Não aprende a interpretar questões",
    "Não entende como o Detran cobra",
  ];

  return (
    <section className="py-20 bg-gradient-dark text-accent-foreground">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          {/* Breaking objection */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-traffic-green/20 text-traffic-green text-sm font-semibold mb-6 border border-traffic-green/30">
            <Lightbulb className="w-4 h-4" />
            Passe de primeira mesmo sem decorar o Código de Trânsito
          </div>

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-6">
            O problema <span className="text-traffic-yellow">NÃO é</span> falta de inteligência.{" "}
            <br className="hidden md:block" />
            É o <span className="text-traffic-yellow">método errado</span> de estudo.
          </h2>

          <p className="text-xl text-accent-foreground/70 mb-12">
            A maioria reprova porque:
          </p>

          {/* Wrong methods */}
          <div className="grid md:grid-cols-2 gap-4 mb-12">
            {wrongMethods.map((method, index) => (
              <div 
                key={index}
                className="flex items-center gap-4 p-5 bg-accent-foreground/5 rounded-xl border border-accent-foreground/10 text-left"
              >
                <XCircle className="w-6 h-6 text-destructive flex-shrink-0" />
                <p className="text-accent-foreground/90">{method}</p>
              </div>
            ))}
          </div>

          {/* Key message */}
          <div className="relative">
            <div className="absolute inset-0 bg-traffic-yellow/20 blur-3xl rounded-full" />
            <div className="relative bg-traffic-dark border-2 border-traffic-yellow rounded-2xl p-8">
              <p className="text-2xl md:text-3xl font-display text-traffic-yellow">
                "A prova não é aleatória. Ela tem lógica.
                <br />
                <span className="text-accent-foreground">E quem entende essa lógica</span>{" "}
                <span className="text-traffic-green">passa.</span>"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
