import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Clock, Smartphone, BookOpen } from "lucide-react";

const PricingSection = () => {
  const benefits = [
    { icon: Clock, text: "Acesso imediato" },
    { icon: Smartphone, text: "Estude pelo celular" },
    { icon: BookOpen, text: "Conteúdo completo" },
    { icon: Shield, text: "Foco em aprovação" },
  ];

  return (
    <section className="py-20 bg-gradient-dark text-accent-foreground" id="comprar">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-4 py-2 rounded-full bg-traffic-yellow/20 text-traffic-yellow text-sm font-semibold mb-6 border border-traffic-yellow/30">
            💰 Investimento
          </span>

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-4">
            Quanto custa sua <span className="text-traffic-yellow">aprovação</span>?
          </h2>

          <p className="text-xl text-accent-foreground/70 mb-12">
            O Método Aprova CNH custa menos do que uma reprovação.
          </p>

          <div className="relative">
            <div className="absolute inset-0 bg-traffic-yellow/20 blur-[60px] rounded-full" />
            <div className="relative bg-card text-foreground rounded-3xl p-8 md:p-12 shadow-2xl border-4 border-traffic-yellow">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-traffic-green rounded-full">
                <span className="text-secondary-foreground font-bold text-sm">OFERTA ESPECIAL</span>
              </div>

              <div className="mb-8 pt-4">
                <p className="text-muted-foreground line-through text-xl mb-2">
                  Evite reprovar e gastar mais
                </p>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-2xl text-muted-foreground">R$</span>
                  <span className="font-display text-7xl md:text-8xl text-traffic-green">39</span>
                  <span className="text-2xl text-muted-foreground">,90</span>
                </div>
                <p className="text-muted-foreground mt-2">pagamento único</p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2 justify-center">
                    <benefit.icon className="w-5 h-5 text-traffic-green" />
                    <span className="text-sm font-medium">{benefit.text}</span>
                  </div>
                ))}
              </div>

              <Button variant="hero" size="xl" className="w-full mb-6 group" asChild>
                <a href="https://pay.kiwify.com.br/62ULbPN">
                  QUERO PASSAR NO EXAME TEÓRICO
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>

              <div className="flex items-center justify-center gap-3 p-4 bg-muted rounded-xl">
                <Shield className="w-8 h-8 text-traffic-green" />
                <div className="text-left">
                  <p className="font-semibold text-sm">Garantia de 7 dias</p>
                  <p className="text-xs text-muted-foreground">
                    Se não te ajudar, devolvemos seu dinheiro
                  </p>
                </div>
              </div>
            </div>
          </div>

          <p className="text-accent-foreground/60 mt-8 text-sm">
            Pagamento seguro via Pix, cartão de crédito ou boleto
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
