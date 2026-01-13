import { Shield, CheckCircle2 } from "lucide-react";

const GuaranteeSection = () => {
  return (
    <section className="py-20 bg-traffic-green/10">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-card border-2 border-traffic-green/30">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Shield icon */}
              <div className="flex-shrink-0">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-success flex items-center justify-center">
                  <Shield className="w-12 h-12 md:w-16 md:h-16 text-secondary-foreground" />
                </div>
              </div>

              {/* Content */}
              <div className="text-center md:text-left">
                <h2 className="font-display text-2xl md:text-3xl text-foreground mb-4">
                  Garantia Incondicional de <span className="text-traffic-green">7 Dias</span>
                </h2>

                <p className="text-lg text-muted-foreground mb-6">
                  Se em até 7 dias você achar que o material não te ajudou, devolvemos seu dinheiro sem burocracia. Sem perguntas, sem complicação.
                </p>

                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-traffic-green" />
                    <span className="text-sm font-medium">Reembolso total</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-traffic-green" />
                    <span className="text-sm font-medium">Sem burocracia</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-traffic-green" />
                    <span className="text-sm font-medium">Risco zero</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
