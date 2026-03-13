import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";
import ebookCover from "@/assets/ebook-cover.png";

const HeroSection = () => {
  const benefits = [
    "Acesso imediato",
    "Estude pelo celular",
    "Conteúdo completo",
    "Foco em aprovação",
  ];

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gradient-hero" />
      
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-traffic-yellow/20 blur-3xl" />
      <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-traffic-green/20 blur-3xl" />

      <div className="container relative z-10 py-20 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left animate-slide-up">
            <span className="inline-block px-4 py-2 rounded-full bg-traffic-yellow/20 text-traffic-yellow text-sm font-semibold mb-6 border border-traffic-yellow/30">
              🚗 Método Comprovado de Aprovação
            </span>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-accent-foreground leading-tight mb-6">
              Passe no exame teórico do Detran{" "}
              <span className="text-gradient-primary">sem decorar leis chatas</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-accent-foreground/80 mb-8 max-w-xl mx-auto lg:mx-0">
              O guia prático que ensina você a pensar como a banca e acertar as questões com segurança
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button variant="hero" size="xl" className="group" asChild>
                <a href="https://pay.kiwify.com.br/62ULbPN">
                  QUERO MINHA APROVAÇÃO NO DETRAN
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-2 text-accent-foreground/80">
                  <CheckCircle2 className="w-5 h-5 text-traffic-green" />
                  <span className="text-sm">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center lg:justify-end animate-float">
            <div className="relative">
              <div className="absolute inset-0 bg-traffic-yellow/30 blur-[60px] rounded-full" />
              <img 
                src={ebookCover} 
                alt="E-book Método Aprova CNH" 
                className="relative z-10 w-full max-w-md drop-shadow-2xl rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-accent-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-traffic-yellow rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
