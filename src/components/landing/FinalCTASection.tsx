import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const FinalCTASection = () => {
  return (
    <section className="py-12 sm:py-20 bg-gradient-dark text-accent-foreground">
      <div className="container px-5 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 sm:mb-6">
            A prova do Detran{" "}
            <span className="text-traffic-yellow">não é impossível</span>.
          </h2>

          <p className="text-base sm:text-xl md:text-2xl text-accent-foreground/80 mb-6 sm:mb-8">
            Ela só exige que você pense do jeito certo.{" "}
            <span className="text-traffic-green font-semibold">Comece agora a estudar com método.</span>
          </p>

          <div className="flex flex-col items-center gap-6">
            <Button variant="hero" size="xl" className="group w-full sm:w-auto text-sm sm:text-xl whitespace-normal h-auto py-3 sm:py-4 px-5 sm:px-10" asChild>
              <a href="https://pay.kiwify.com.br/62ULbPN">
                QUERO MINHA APROVAÇÃO NO DETRAN
                <ArrowRight className="group-hover:translate-x-1 transition-transform flex-shrink-0" />
              </a>
            </Button>

            <div className="flex flex-wrap gap-6 justify-center text-sm text-accent-foreground/70">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-traffic-green" />
                <span>Acesso imediato</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-traffic-green" />
                <span>Garantia de 7 dias</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-traffic-green" />
                <span>Pagamento seguro</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
